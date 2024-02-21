import { SessionOptions } from "iron-session";

import { env } from "@/env.mjs";

export const authCookieName = "near-nest-session";

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
  uuid: string;
  accessToken: string;
  points: number;
  referralCode: string;
}

export const defaultSession: SessionData = {
  username: "",
  isLoggedIn: false,
  uuid: "",
  accessToken: "",
  points: 0,
  referralCode: "",
};

export const sessionOptions: SessionOptions = {
  password: env.COOKIE_PASSWORD,
  cookieName: authCookieName,
  ttl: 35000,
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: process.env.NODE_ENV === "production",
    maxAge: undefined,

    sameSite: "none", // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#lax
  },
};
