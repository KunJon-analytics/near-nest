"use server";

import prisma from "@/lib/prisma";
import { PropertiesParams, PropertiesSearchQuery } from "@/types";
import { CreatePropertyParams } from "@/lib/schemas/host";
import { defaultLocation } from "@/config/default";
import { Prisma } from "@prisma/client";

import { getSession } from "./session";

export const getProperties = async (searchParams: PropertiesParams) => {
  const data: PropertiesSearchQuery = {
    hasAirCon: searchParams.hasAirCon === "true" ? true : undefined,
    hasHeating: searchParams.hasHeating === "true" ? true : undefined,
    hasInternet: searchParams.hasInternet === "true" ? true : undefined,
    hasKitchen: searchParams.hasKitchen === "true" ? true : undefined,
    hasPool: searchParams.hasPool === "true" ? true : undefined,
    hasTv: searchParams.hasTv === "true" ? true : undefined,
  };
  try {
    const properties = await prisma.property.findMany({
      where: { ...data },
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

export const updateProperty = async (values: Prisma.PropertyUpdateInput) => {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return { error: "Unauthorized" };
    }

    const property = await prisma.property.update({
      data: { ...values },
      where: { id: values.id as string, hostId: session.uuid },
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
