import { NextResponse } from "next/server";
import axios from "axios";

import prisma from "@/lib/prisma";
import platformAPIClient from "@/lib/platformAPIClient";
import { PaymentDTO, ReserveTx } from "@/types";

export async function POST(req: Request) {
  try {
    const { payment }: { payment: PaymentDTO<ReserveTx> } = await req.json();
    const paymentId = payment.identifier;
    const txid = payment?.transaction?.txid as string;
    const txURL = payment?.transaction?._link as string;

    const currentPayment = await platformAPIClient.get<PaymentDTO<ReserveTx>>(
      `/v2/payments/${paymentId}`
    );

    const piTransaction = await prisma.payment.findUnique({
      where: { paymentId },
    });

    // payment doesn't exist
    if (!piTransaction) {
      console.log("[INCOMPLETE_PAYMENT]", "Payment not found");
      return new NextResponse("Payment not found", { status: 400 });
    }

    // check the transaction on the Pi blockchain
    const horizonResponse = await axios.create({ timeout: 20000 }).get(txURL);
    const paymentIdOnBlock = horizonResponse.data.memo;
    // console.log(horizonResponse.data);

    // and check other data as well e.g. amount
    if (paymentIdOnBlock !== piTransaction.paymentId) {
      console.log(
        "[INCOMPLETE_PAYMENT]",
        "Payment id not same with blockchain"
      );
      return new NextResponse("Payment id doesn't match.", { status: 400 });
    }

    // let Pi Servers know that the payment is completed
    await platformAPIClient.post(`/v2/payments/${paymentId}/complete`, {
      txid,
    });

    // check if tx is still at INITIALIZED stage then complete reservation if not only complete
    if (
      piTransaction.status === "INITIALIZED" &&
      piTransaction.amount <= currentPayment.data.amount &&
      piTransaction.type === "RESERVE"
    ) {
      const reservation = await prisma.reservation.findUnique({
        where: { id: piTransaction.purposeId },
      });
      if (
        reservation?.totalPrice &&
        reservation.totalPrice >= piTransaction.amount &&
        currentPayment.data.metadata.reservationId === reservation.id
      ) {
        await prisma.reservation.update({
          where: { id: piTransaction.purposeId },
          data: { status: "CONFIRMED" },
        });
      }
    }

    await prisma.payment.update({
      where: { paymentId },
      data: { status: "COMPLETED", txId: txid },
    });

    return new NextResponse(`Handled the incomplete payment ${paymentId}`, {
      status: 200,
    });
  } catch (error) {
    console.log("[INCOMPLETE_PAYMENT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
