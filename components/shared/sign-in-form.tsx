"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { AuthResult, LoginPageSearchParams } from "@/types";
import { onIncompletePaymentFound } from "@/lib/pi";
import { defaultLoginRedirect } from "@/config/default";

import { useToast } from "../ui/use-toast";
import FormButton from "../shared/form-button";
import { login } from "@/actions/session";

const scopes = ["username", "payments", "wallet_address"];

type SignInFormProps = {} & React.ComponentProps<"form">;

export default function SignInForm({ className }: SignInFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");
  const redirect = searchParams.get("redirect");

  return (
    <form
      className={cn("grid items-start gap-4", className)}
      action={async () => {
        try {
          const authResult: AuthResult = await window.Pi.authenticate(
            scopes,
            onIncompletePaymentFound
          );
          await login({
            ...authResult,
            latitude,
            longitude,
          });

          // toast message
          toast({
            title: "Success",
            description:
              "Wallet login successful! Let's find your perfect rental!",
          });
          return router.replace(redirect || defaultLoginRedirect);
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
