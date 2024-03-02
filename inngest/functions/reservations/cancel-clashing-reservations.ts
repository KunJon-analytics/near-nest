import { inngest } from "@/inngest/client";
import prisma from "@/lib/prisma";

export const cancelClashingReservations = inngest.createFunction(
  { id: "cancel-reservations" },
  { event: "reservations/clashes.cancel" },
  async ({ event, step }) => {
    // (event) cancel reservations clashing with completed reservation
    const reservationId = event.data.reservationId;

    try {
      // get completed reservation
      const completedReservation = await step.run(
        "get-completed-reservation",
        () =>
          prisma.reservation.findUnique({
            where: { id: reservationId },
          })
      );

      if (!completedReservation) {
        return { message: "No completed reservation" };
      }

      // get invalid reservations
      const invalidReservations = await step.run(
        "get-invalid-reservations",
        () =>
          prisma.reservation.findMany({
            where: {
              status: "PENDING",
              propertyId: completedReservation.propertyId,
              OR: [
                {
                  checkInDate: { lt: completedReservation.checkOutDate },
                  checkOutDate: { gt: completedReservation.checkInDate },
                },
                {
                  checkInDate: { gte: completedReservation.checkInDate },
                  checkOutDate: { lt: completedReservation.checkOutDate },
                },
              ],
            },
          })
      );

      // cancel invalid reservations
      const cancelledReservations = await step.run(
        "cancel-invalid-reservations",
        () => {
          // invalidReservationsId array of ids
          const invalidReservationsId = invalidReservations.map(
            (reservation) => reservation.id
          );
          if (!invalidReservationsId.length) {
            return [];
          }
          prisma.$transaction(
            invalidReservationsId.map((reservationId) =>
              prisma.reservation.update({
                where: { id: reservationId },
                data: { status: "CANCELLED" },
              })
            )
          );
          return invalidReservationsId;
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
