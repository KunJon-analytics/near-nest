"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { sessionOptions } from "@/lib/session";
import { LoginParam } from "@/types";
import platformAPIClient from "@/lib/platformAPIClient";
import prisma from "@/lib/prisma";
import { SessionData, defaultSession } from "@/lib/utils";

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.username = defaultSession.username;
    session.accessToken = defaultSession.accessToken;
    session.latitude = defaultSession.latitude;
    session.longitude = defaultSession.longitude;
    session.points = defaultSession.points;
    session.referralCode = session.referralCode;
    session.uuid = defaultSession.uuid;
    session.isHost = defaultSession.isHost;
  }

  return session;
}

export async function logout() {
  // false => no db call for logout
  const session = await getSession();
  session.destroy();
  revalidatePath("/", "layout");
  // redirect(`/`);
}

export async function login(auth: LoginParam) {
  const session = await getSession();
  try {
    // Verify the user's access token with the /me endpoint:
    const me = await platformAPIClient.get(`/v2/me`, {
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    });
  } catch (err) {
    console.log("[LOGIN_SERVER]", err);
    console.log(err);
    throw new Error("Invalid access token");
  }

  session.username = auth.user.username;
  session.isLoggedIn = true;
  session.accessToken = auth.accessToken;
  session.uuid = auth.user.uid;
  session.latitude = auth.latitude || undefined;
  session.longitude = auth.longitude || undefined;
  const user = await prisma.user.upsert({
    where: { uuid: auth.user.uid },
    include: { host: true },
    update: {
      accessToken: auth.accessToken,
    },
    create: {
      uuid: auth.user.uid,
      username: auth.user.username,
      accessToken: auth.accessToken,
    },
  });
  session.points = user.points;
  session.referralCode = user.referralCode;
  session.isHost = !!user.host;
  await session.save();
  revalidatePath("/", "layout");
}
