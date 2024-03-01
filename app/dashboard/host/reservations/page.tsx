import React from "react";

import { getSession } from "@/actions/session";
import { getReservations } from "@/actions/reservations";

import { HostReservationsTable } from "../_components/reservations/host-reservations-table";
import { columns } from "../_components/reservations/columns";

const HostReservationsPage = async () => {
  const session = await getSession();
  const reservations = await getReservations({ hostId: session.uuid });

  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
      <div className="flex items-center justify-between py-5 lg:py-6">
        <div className="flex items-center space-x-1">
          <h2 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
            Trips
          </h2>
        </div>

        {/* <ReservationsAction /> */}
      </div>

      <HostReservationsTable columns={columns} data={reservations} />
    </main>
  );
};

export default HostReservationsPage;
