import { startOfToday, subDays } from "date-fns";

import { inngest } from "@/inngest/client";
import prisma from "@/lib/prisma";

// Some function we'll call
export const cancelExpiredReservations = inngest.createFunction(
  { id: "cancel-expired-reservations" },
  { cron: "0 0 * * *" },
  async ({ step }) => {
    // get pending reservations with checkIn dates of yesterday
    const yesterday = subDays(startOfToday(), 1);
    try {
      const expiredReservations = await step.run(
        "get-completed-reservation",
        () =>
          prisma.reservation.findMany({
            where: { status: "PENDING", checkInDate: { lte: yesterday } },
          })
      );

      // cancel expired reservations
      const cancelledReservations = await step.run(
        "cancel-expired-reservations",
        () => {
          // expiredReservationsId array of ids
          const expiredReservationsId = expiredReservations.map(
            (reservation) => reservation.id
          );
          if (!expiredReservationsId.length) {
            return [];
          }
          prisma.$transaction(
            expiredReservationsId.map((reservationId) =>
              prisma.reservation.update({
                where: { id: reservationId },
                data: { status: "CANCELLED" },
              })
            )
          );
          return expiredReservationsId;
        }
      );

      // send notifications
      return { cancelledReservations };
    } catch (error) {
      throw new Error("Database error", {
        cause: error,
      });
    }
  }
);
