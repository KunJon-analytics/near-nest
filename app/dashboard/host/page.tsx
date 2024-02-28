import React from "react";

import { getSession } from "@/actions/session";

import { HostDropdown } from "./_components/host-dropdown";
import HostStats from "./_components/host-stats";
import { HostReservationsTable } from "./_components/reservations/host-reservations-table";
import { columns } from "./_components/reservations/columns";
import prisma from "@/lib/prisma";
import AnalyticsCard from "./_components/analytics-card";
import IncomeCard from "./_components/income-card";
import PropertyCard from "./_components/properties/property-card";

const HostDashboardPage = async () => {
  const session = await getSession();
  const data = await prisma.reservation.findMany({
    include: { property: true },
  });
  console.log({ data });
  return (
    <main className="main-content w-full pb-8">
      <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
        <div className="card col-span-12 lg:col-span-8 xl:col-span-9">
          <div className="mt-3 flex items-center justify-between px-4 sm:px-5">
            <h2 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
              Travels History
            </h2>
            <div className="flex">
              <HostDropdown />
            </div>
          </div>

          <HostStats />

          <HostReservationsTable columns={columns} data={data} />
        </div>
        <div className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-4 lg:grid-cols-1 lg:gap-6 xl:col-span-3">
          <AnalyticsCard />
          <IncomeCard />
        </div>
      </div>
      <div className="mt-4 pl-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 lg:mt-6">
        <div className="rounded-l-lg bg-slate-150 pt-4 pb-1 dark:bg-navy-800">
          <h2 className="px-4 text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 sm:px-5 lg:text-lg">
            Top Hotels
          </h2>
          <div className="scrollbar-sm mt-4 flex space-x-4 overflow-x-auto px-4 pb-4 sm:px-5">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HostDashboardPage;
