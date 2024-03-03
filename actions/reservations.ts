"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

import { getSession } from "./session";

interface IParams {
  propertyId?: string;
  userId?: string;
  hostId?: string;
}

interface ICreateReservationParams {
  propertyId: string;
  totalPrice: number;
  checkInDate: Date;
  checkOutDate: Date;
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

    // send notification

    return reservations;
  } catch (error: any) {
    throw new Error(error);
  }
}

export const createReservation = async (params: ICreateReservationParams) => {
  const { propertyId, checkInDate, checkOutDate, totalPrice } = params;

  if (!propertyId || !checkInDate || !checkOutDate || !totalPrice) {
    return { error: "Invalid params" };
  }
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return { error: "Unauthenticated" };
    }

    const reservations = await prisma.reservation.findMany({
      where: {
        status: "CONFIRMED",
        propertyId,
        OR: [
          {
            checkInDate: { lt: checkOutDate },
            checkOutDate: { gt: checkInDate },
          },
          {
            checkInDate: { gte: checkInDate },
            checkOutDate: { lt: checkOutDate },
          },
        ],
      },
    });

    if (!!reservations.length) {
      return { error: "Invalid dates" };
    }

    const created = await prisma.reservation.create({
      data: {
        checkInDate,
        checkOutDate,
        totalPrice,
        propertyId,
        userId: session.uuid,
      },
    });
    return { success: created.id };
  } catch (error) {
    console.log("CREATE_RESERVATION_ERROR", error);
    return { error: "Server Error" };
  }
};
