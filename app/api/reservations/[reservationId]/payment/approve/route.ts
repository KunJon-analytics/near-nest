import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import platformAPIClient from "@/lib/platformAPIClient";
import { ReservationTx, PaymentDTO } from "@/types";
import { getSession } from "@/actions/session";

export async function POST(
  req: Request,
  { params }: { params: { reservationId: string } }
) {
  try {
    const session = await getSession();
    const { reservationId } = params;

    if (!session.isLoggedIn) {
      console.log("[RESERVATION_PAYMENT_APPROVE]", "User not authenticated");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const {
      paymentId,
    }: {
      paymentId: string;
    } = await req.json();

    const currentPayment = await platformAPIClient.get<
      PaymentDTO<ReservationTx>
    >(`/v2/payments/${paymentId}`);

    /* 
      DEVELOPER NOTE:
      implement logic here 
      e.g. ensure there is no prev pi payment with payment ID, 
      payment is the same and there is no clashing reservation

    */

    if (currentPayment.data.metadata.reservationId !== reservationId) {
      console.log("[RESERVATION_PAYMENT_APPROVE]", "Wrong reservation Id");
      return new NextResponse("Wrong reservation Id", { status: 401 });
    }

    const reservation = await prisma.reservation.findUnique({
      where: {
        id: reservationId,
        status: "PENDING",
      },
    });

    const activeTx = await prisma.payment.findFirst({
      where: {
        paymentId,
      },
    });

    if (!!activeTx) {
      console.log(
        "[RESERVATION_PAYMENT_APPROVE]",
        "active pi tx with payment Id"
      );
      return new NextResponse("Active tx with payment ID", { status: 401 });
    }

    if (!reservation) {
      console.log("[RESERVATION_PAYMENT_APPROVE]", "Invalid reservation");
      return new NextResponse("Not Found", { status: 404 });
    }

    if (currentPayment.data.metadata.reservationId !== reservation.id) {
      console.log(
        "[RESERVATION_PAYMENT_APPROVE]",
        "Invalid metadata reservationId"
      );
      return new NextResponse("Invalid metadata reservationId", {
        status: 401,
      });
    }

    if (currentPayment.data.amount !== reservation.totalPrice) {
      console.log("[RESERVATION_PAYMENT_APPROVE]", "wrong payment amount");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.payment.upsert({
      create: {
        amount: currentPayment.data.amount,
        paymentId,
        purposeId: reservationId,
        type: "RESERVE",
      },
      where: { paymentId },
      update: {},
    });

    // let Pi Servers know that you're ready
    await platformAPIClient.post(`/v2/payments/${paymentId}/approve`);
    return new NextResponse(`Approved the payment ${paymentId}`, {
      status: 200,
    });
  } catch (error) {
    console.log("[RESERVATION_PAYMENT_APPROVE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
