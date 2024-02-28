"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";
import { BeaHostParams } from "@/lib/schemas/host";

import { getSession } from "./session";

export const beAHost = async (values: BeaHostParams) => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return { error: "Unauthenticated" };
  }
  try {
    const host = await prisma.host.upsert({
      create: { ...values, userId: session.uuid },
      update: {},
      where: { userId: session.uuid },
    });
    session.isHost = !!host.userId;
    await session.save();
    revalidatePath("/", "layout");
    return { success: host.userId };
  } catch (error) {
    console.log("beAHost Error", error);
    return { error: "Server Error" };
  }
};
