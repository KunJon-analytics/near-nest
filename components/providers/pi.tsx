"use client";

import Script from "next/script";

import { env } from "@/env.mjs";

export function PiProvider() {
  return (
    <Script
      src="https://sdk.minepi.com/pi-sdk.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.Pi.init({
          version: "2.0",
          sandbox: env.NEXT_PUBLIC_PI_SANDBOX === "true",
        });
      }}
    />
  );
}
