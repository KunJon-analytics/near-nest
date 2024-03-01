import React from "react";

import { getSession } from "@/actions/session";
import { getReservations } from "@/actions/reservations";

import { ReservationsDropdown } from "./_components/reservations-dropdown";
import ReservationsAction from "./_components/reservations-action";
import ReservationCard from "./_components/reservation-card";

const DashboardReservationsPage = async () => {
  const session = await getSession();
  const reservations = await getReservations({ userId: session.uuid });

  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
      <div className="flex items-center justify-between py-5 lg:py-6">
        <div className="flex items-center space-x-1">
          <h2 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
            Trips
          </h2>
          <ReservationsDropdown />
        </div>

        {/* <ReservationsAction /> */}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {reservations.map((reservation) => (
          <ReservationCard key={reservation.id} data={reservation} />
        ))}
      </div>
    </main>
  );
};

export default DashboardReservationsPage;
