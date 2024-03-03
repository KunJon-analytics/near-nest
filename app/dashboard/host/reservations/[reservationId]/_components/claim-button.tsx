"use client";

import React from "react";
import { HandCoins } from "lucide-react";
import { addHours, isPast } from "date-fns";

import { Button } from "@/components/ui/button";
import { ReservationReturnType } from "@/types";
import { claimPayment } from "@/actions/host";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  reservation: ReservationReturnType;
}

const ClaimButton = ({ reservation, className }: Iprops) => {
  const { toast } = useToast();
  const isValidStatus = reservation?.status === "CONFIRMED";
  const fiveHoursAheadCheckIn = addHours(reservation.checkInDate, 5);
  const isValidTime = isPast(fiveHoursAheadCheckIn);

  const claim = async () => {
    try {
      const response = await claimPayment(reservation.id);
      if (response.success) {
        toast({ description: response.success });
      }
      if (response.error) {
        toast({ description: response.error, variant: "destructive" });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: "An error occured, please try again later",
        variant: "destructive",
      });
    }
  };

  if (!isValidStatus || !isValidTime) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={claim}
      className={cn(
        "btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-9 sm:w-9",
        className
      )}
    >
      <HandCoins className="h-5 w-5" />
    </Button>
  );
};

export default ClaimButton;
