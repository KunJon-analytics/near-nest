import React from "react";

import { getSession } from "@/actions/session";
import prisma from "@/lib/prisma";

import { HostDropdown } from "./_components/host-dropdown";
import HostStats from "./_components/host-stats";
import { HostReservationsTable } from "./_components/reservations/host-reservations-table";
import { columns } from "./_components/reservations/columns";
import AnalyticsCard from "./_components/analytics-card";
import IncomeCard from "./_components/income-card";
import PropertiesLayout from "./properties/_components/properties-layout";

const HostDashboardPage = async () => {
  const session = await getSession();
  const data = await prisma.reservation.findMany({
    include: { property: true },
    where: { property: { hostId: session.uuid } },
  });

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

          <HostStats reservations={data} />

          <HostReservationsTable columns={columns} data={data} />
        </div>
        <div className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-4 lg:grid-cols-1 lg:gap-6 xl:col-span-3">
          <AnalyticsCard />
          <IncomeCard />
        </div>
      </div>
      <PropertiesLayout />
    </main>
  );
};

export default HostDashboardPage;
