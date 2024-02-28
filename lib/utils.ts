import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { env } from "@/env.mjs";
import { $Enums } from "@prisma/client";

export const stages = [
  "general",
  "type",
  "facilities",
  "media",
  "list",
] as const;

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
  isHost: boolean;
  uuid: string;
  accessToken: string;
  points: number;
  referralCode: string;
  latitude: string | undefined;
  longitude: string | undefined;
}

export const defaultSession: SessionData = {
  username: "",
  isLoggedIn: false,
  isHost: false,
  uuid: "",
  accessToken: "",
  points: 0,
  referralCode: "",
  latitude: undefined,
  longitude: undefined,
};

export type Stage = (typeof stages)[number];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStage(stage: string | undefined): Stage {
  const value = stages.find((validName) => validName === stage);
  if (value) {
    return value;
  }
  return "general";
}

export async function fetchSession() {
  const response = await fetch(`${env.NEXT_PUBLIC_APP_URL}/api/session`, {
    next: { tags: ["session"] },
  });
  const session = (await response.json()) as SessionData;
  return session;
}

export function getReservationColor(status: $Enums.ReservationStatus): string {
  switch (status) {
    case "PENDING":
      return "bg-info dark:bg-info";
    case "CANCELLED":
      return "bg-error dark:bg-error";
    case "CONFIRMED":
      return "bg-success dark:bg-success";

    default:
      return "bg-info dark:bg-info";
  }
}
