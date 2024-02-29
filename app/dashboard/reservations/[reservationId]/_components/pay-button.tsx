"use client";

import { HandCoins } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const PayButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      //   @click="window.print()"
      className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-9 sm:w-9"
    >
      <HandCoins className="h-5 w-5" />
    </Button>
  );
};

export default PayButton;
