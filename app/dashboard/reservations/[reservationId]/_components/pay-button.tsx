"use client";

import { HandCoins } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import axiosClient, { config } from "@/lib/axios-client";
import {
  ReservationTx,
  PaymentDTO,
  PiCallbacks,
  ReservationReturnType,
} from "@/types";
import { logout } from "@/actions/session";
import { useToast } from "@/components/ui/use-toast";

interface IProps {
  reservation: ReservationReturnType;
}

const PayButton = ({ reservation }: IProps) => {
  const { toast } = useToast();
  const router = useRouter();

  const onReadyForServerApproval = (paymentId: string) => {
    console.log("onReadyForServerApproval", paymentId);
    axiosClient.post(
      `/reservations/${reservation.id}/payment/approve`,
      { paymentId },
      config
    );
  };

  const onReadyForServerCompletion = (paymentId: string, txid: string) => {
    console.log("onReadyForServerCompletion", paymentId, txid);
    axiosClient.post(
      `/reservations/${reservation.id}/payment/complete`,
      { paymentId, txid },
      config
    );

    toast({
      title: "Transaction Successful",
      description: `Payment with id: ${paymentId} completed`,
    });
  };

  const onCancel = (paymentId: string) => {
    console.log("onCancel", paymentId);
    toast({
      title: "Transaction Cancelled",
      description: `Payment with id: ${paymentId} cancelled`,
    });
    return axiosClient.post("/payments/cancel", { paymentId });
  };

  const onError = (error: Error, payment?: PaymentDTO<ReservationTx>) => {
    console.error("onError", error);
    toast({
      title: "Uh oh! Something went wrong.",
      description:
        "There is an errow with this payment, check console for details",
      variant: "destructive",
    });
    if (payment) {
      console.log(payment);
      // handle the error accordingly
    }
  };

  const callbacks: PiCallbacks<ReservationTx> = {
    onCancel,
    onError,
    onReadyForServerApproval,
    onReadyForServerCompletion,
  };

  const reserve = async () => {
    try {
      const paymentData: {
        amount: number;
        memo: string;
        metadata: ReservationTx;
      } = {
        amount: reservation.totalPrice,
        memo: `Pay π${reservation.totalPrice} for your reservation at ${reservation.property.title}`,
        metadata: { reservationId: reservation.id },
      };

      const payment = await window.Pi.createPayment(paymentData, callbacks);
      console.log({ payment });
    } catch (error) {
      console.log("subscribe ERROR", { error });
      if (error instanceof Error) {
        // Inside this block, err is known to be a Error
        if (
          error.message === 'Cannot create a payment without "payments" scope'
        ) {
          await logout();
          toast({
            title: "Uh oh! Something went wrong.",
            description: "Please login again",
            variant: "destructive",
          });
        }
      }
    } finally {
      router.refresh();
    }
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={reserve}
      className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-9 sm:w-9"
    >
      <HandCoins className="h-5 w-5" />
    </Button>
  );
};

export default PayButton;
