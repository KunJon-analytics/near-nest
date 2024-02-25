"use server";

import prisma from "@/lib/prisma";
import { PropertiesParams } from "@/types";
import { CreatePropertyParams, defaultLocation } from "@/lib/schemas/host";

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
      latitude: values.latitude
        ? Number(values.latitude)
        : defaultLocation.latitude,
      longitude: values.longitude
        ? Number(values.longitude)
        : defaultLocation.longitude,
    };
    const property = await prisma.property.create({
      data: { ...propertyParam },
    });
    // redirect to update property page or return success after try catch
    return { success: property.id };
  } catch (error) {
    return {
      error: "Server Error",
    };
  }
};
