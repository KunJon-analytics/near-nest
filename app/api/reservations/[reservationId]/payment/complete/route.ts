import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import platformAPIClient from "@/lib/platformAPIClient";
import { ReservationTx, PaymentDTO } from "@/types";
import { getSession } from "@/actions/session";
import { inngest } from "@/inngest/client";

export async function POST(
  req: Request,
  { params }: { params: { reservationId: string } }
) {
  try {
    const session = await getSession();

    if (!session.isLoggedIn) {
      console.log("[COMPLETE_RESERVATION]", "User not authenticated");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const {
      paymentId,
      txid,
    }: {
      paymentId: string;
      txid: string;
    } = await req.json();

    const currentPayment = await platformAPIClient.get<
      PaymentDTO<ReservationTx>
    >(`/v2/payments/${paymentId}`);

    /* 
      DEVELOPER NOTE:
      implement logic here 
      e.g. verify transaction with blockchain data, 
      change reservation status to confirmed
      send inngest event to cancel clashed date reservation
      add txid to payment
    */

    // verify with horizon data (amount and txid)

    const reservation = await prisma.reservation.findUnique({
      where: {
        id: currentPayment.data.metadata.reservationId,
      },
    });

    const payment = await prisma.payment.findUnique({ where: { paymentId } });

    if (reservation?.status !== "PENDING") {
      console.log("[COMPLETE_RESERVATION]", "Wrong reservation status");
      return new NextResponse("Wrong reservation status", { status: 400 });
    }

    if (payment?.status !== "INITIALIZED") {
      console.log("[COMPLETE_RESERVATION]", "Wrong offer status");
      return new NextResponse("Wrong offer status", { status: 400 });
    }

    if (currentPayment.data.amount !== reservation.totalPrice) {
      console.log("[COMPLETE_RESERVATION]", "Wrong reservation price");
      return new NextResponse("Wrong reservation price", { status: 400 });
    }

    // let Pi server know that the payment is completed
    await platformAPIClient.post(`/v2/payments/${paymentId}/complete`, {
      txid,
    });

    await prisma.payment.update({
      where: { paymentId },
      data: { txId: txid, status: "COMPLETED" },
    });
    const confirmedReservation = await prisma.reservation.update({
      where: { id: reservation.id },
      data: { status: "CONFIRMED" },
    });

    // send inngest event to cancel clashing reservations -> send notification to
    // affected users
    await inngest.send({
      name: "reservations/clashes.cancel",
      data: {
        reservationId: confirmedReservation.id,
      },
    });

    return new NextResponse(`Completed the payment ${paymentId}`, {
      status: 200,
    });
  } catch (error) {
    console.log("[COMPLETE_RESERVATION]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
