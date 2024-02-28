import type { LucideIcon } from "lucide-react";
import { IronSession } from "iron-session";

import { SessionData } from "@/lib/session";
import { Prisma } from "@prisma/client";

declare global {
  interface Window {
    Pi: any;
  }
}

export type MyPaymentMetadata = {};

export type KnownError = { message: string };

export type AuthResult = {
  accessToken: string;
  user: {
    uid: string;
    username: string;
  };
};

export type LoginParam = AuthResult & {
  longitude: string | null;
  latitude: string | null;
};

export type LoginPageSearchParams = {
  latitude: string | undefined;
  longitude: string | undefined;
  redirect: string | undefined;
};

export type User = AuthResult["user"];

export interface PiCallbacks<T> {
  onReadyForServerApproval: (paymentId: string) => void;
  onReadyForServerCompletion: (paymentId: string, txid: string) => void;
  onCancel: (paymentId: string) => Promise<AxiosResponse<any, any>>;
  onError: (error: Error, payment?: PaymentDTO<T>) => void;
}

export interface PaymentDTO<T> {
  amount: number;
  user_uid: string;
  created_at: string;
  identifier: string;
  metadata: T;
  memo: string;
  status: {
    developer_approved: boolean;
    transaction_verified: boolean;
    developer_completed: boolean;
    cancelled: boolean;
    user_cancelled: boolean;
  };
  to_address: string;
  transaction: null | {
    txid: string;
    verified: boolean;
    _link: string;
  };
}

export type ReserveTx = { reservationId: string };

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type SessionUser = Pick<
  IronSession<SessionData>,
  "accessToken" | "isLoggedIn" | "tokens" | "username" | "uuid"
>;

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DefaultConfig = {
  mainNav: MainNavItem[];
};

export type PropertyFilterType = {
  label: PropertyFilterLabel;
  name: string;
  icon: LucideIcon;
  description: string;
};

export type PropertyFilterLabel =
  | "hasTv"
  | "hasKitchen"
  | "hasAirCon"
  | "hasHeating"
  | "hasInternet"
  | "hasPool";

export type PropertiesParams = Record<PropertyFilterLabel, string | null>;

export type MeReturnType = Prisma.UserGetPayload<{
  include: {
    host: true;
    notifications: true;
    receivedMessages: true;
    reservations: true;
    sentMessages: true;
  };
}>;

export type PropertyReturnType = Prisma.PropertyGetPayload<{
  include: { host: true; media: true; reservations: true };
}>;

export type ReservationReturnType = Prisma.ReservationGetPayload<{
  include: { property: true };
}>;
