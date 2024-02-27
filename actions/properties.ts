"use server";

import prisma from "@/lib/prisma";
import { PropertiesParams } from "@/types";
import { CreatePropertyParams } from "@/lib/schemas/host";
import { defaultLocation } from "@/config/default";

import { getSession } from "./session";

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

export const createProperty = async (values: CreatePropertyParams) => {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return { error: "Unauthorized" };
    }
    const propertyParam = {
      ...values,
      hostId: session.uuid,
      latitude: session.latitude
        ? Number(session.latitude)
        : defaultLocation.latitude,
      longitude: session.longitude
        ? Number(session.longitude)
        : defaultLocation.longitude,
    };
    const property = await prisma.property.create({
      data: { ...propertyParam },
    });
    // redirect to update property page or return success after try catch
    return { success: property.id };
  } catch (error) {
    console.log(error);
    return {
      error: "Server Error",
    };
  }
};
