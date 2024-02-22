"use server";

import prisma from "@/lib/prisma";

import { getSession } from "./session";

export const getMe = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return null;
  }
  try {
    const me = await prisma.user.findUnique({
      where: { uuid: session.uuid },
      include: {
        host: true,
        notifications: true,
        receivedMessages: true,
        reservations: true,
        sentMessages: true,
      },
    });
    return me;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
};
