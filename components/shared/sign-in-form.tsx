"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { AuthResult } from "@/types";
import { onIncompletePaymentFound } from "@/lib/pi";
import { login } from "@/actions/session";

import { useToast } from "../ui/use-toast";

import FormButton from "../shared/form-button";

const scopes = ["username", "payments", "wallet_address"];

type SignInFormProps = {} & React.ComponentProps<"form">;

export default function SignInForm({ className }: SignInFormProps) {
  const { toast } = useToast();
  return (
    <form
      className={cn("grid items-start gap-4", className)}
      action={async () => {
        try {
          const authResult: AuthResult = await window.Pi.authenticate(
            scopes,
            onIncompletePaymentFound
          );
          await login(authResult);
          // toast message
          toast({
            title: "Success",
            description:
              "Wallet login successful! Let's find your perfect rental!",
          });
        } catch (error) {
          console.log(error);
          // toast error
          toast({
            title: "Uh oh! Something went wrong.",
            description: "Wallet login failed. Please try again.",
            variant: "destructive",
          });
        }
      }}
    >
      <div className="flex flex-col space-y-4 px-4 py-8 md:px-16">
        <FormButton />
      </div>
    </form>
  );
}
