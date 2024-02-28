"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

interface IParams {
  propertyId?: string;
  userId?: string;
  hostId?: string;
}

export async function getReservations(params: IParams) {
  try {
    const { propertyId, userId, hostId } = params;

    const query: Prisma.ReservationWhereInput = {};

    if (propertyId) {
      query.propertyId = propertyId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (hostId) {
      query.property = { hostId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        property: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return reservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
