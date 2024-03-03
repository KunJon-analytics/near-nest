"use server";

import { revalidatePath } from "next/cache";
import { addHours, isPast } from "date-fns";

import prisma from "@/lib/prisma";
import { BeaHostParams } from "@/lib/schemas/host";
import { platformFee } from "@/config/default";
import { safeParse } from "@/lib/pi";
import { pi } from "@/lib/pi-client";
import { inngest } from "@/inngest/client";

import { getSession } from "./session";

export const beAHost = async (values: BeaHostParams) => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return { error: "Unauthenticated" };
  }
  try {
    const host = await prisma.host.upsert({
      create: { ...values, userId: session.uuid },
      update: {},
      where: { userId: session.uuid },
    });
    session.isHost = !!host.userId;
    await session.save();
    revalidatePath("/", "layout");
    return { success: host.userId };
  } catch (error) {
    console.log("beAHost Error", error);
    return { error: "Server Error" };
  }
};

export const claimPayment = async (reservationId: string) => {
  try {
    const session = await getSession();
    const reservation = await prisma.reservation.findUnique({
      where: {
        id: reservationId,
        status: "CONFIRMED",
        property: { hostId: session.uuid },
      },
      include: { property: true },
    });
    if (!reservation) {
      return { error: "Invalid reservation" };
    }
    // check if it is 12 hours past checkin time
    const fiveHoursAheadCheckIn = addHours(reservation.checkInDate, 5);
    const isValidTime = isPast(fiveHoursAheadCheckIn);

    if (!isValidTime) {
      return { error: "Not yet time to claim" };
    }

    // check old payment
    const oldPayment = await prisma.payment.findFirst({
      where: { purposeId: reservation.id, type: "CLAIM" },
    });

    if (!!oldPayment) {
      return { error: "Ongoing payment" };
    }

    // marked reservation as completed
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: { status: "COMPLETED" },
    });

    const revenue = safeParse((reservation.totalPrice * platformFee) / 100);
    const claimAmount = safeParse(reservation.totalPrice - revenue);

    // create pipayment
    const paymentData = {
      amount: claimAmount,
      memo: `payment for reservation: ${reservation.id}`, //
      metadata: { reservationId },
      uid: reservation.property.hostId,
    };

    const paymentId = await pi.createPayment(paymentData);

    // create near next payment
    await prisma.payment.create({
      data: {
        paymentId,
        amount: reservation.totalPrice,
        purposeId: reservationId,
        type: "CLAIM",
      },
    });

    // send finish tx event
    await inngest.send({
      name: "payments/tx.finish",
      id: `finish-claim-tx-${reservationId}`,
      data: {
        paymentId,
      },
      user: { uuid: session.uuid },
    });

    revalidatePath("/dashboard/host");

    return { success: "Claim transaction sent" };
  } catch (error) {
    console.log("CLAIM_PAYMENT_ERROR", error);
    return { error: "Internal Server Error" };
  }
};
