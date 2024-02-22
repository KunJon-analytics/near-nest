"use server";

import prisma from "@/lib/prisma";
import { PropertiesParams } from "@/types";

export const getProperties = async (searchParams: PropertiesParams) => {
  try {
    const properties = await prisma.property.findMany({
      where: { ...searchParams },
      include: { host: true, media: true, reservations: true },
    });
    return properties;
  } catch (error) {
    throw new Error(error as any);
  }
};
