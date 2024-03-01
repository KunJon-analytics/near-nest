import React from "react";

import { getSession } from "@/actions/session";
import prisma from "@/lib/prisma";

import { HostPropertiesDropdown } from "./_components/host-properties-dropdown";
import PropertiesListCard from "./_components/properties-list-card";
// import HostPropertiesAction from "./_components/host-properties-action";

const HostPropertiesPage = async () => {
  const session = await getSession();
  const properties = await prisma.property.findMany({
    where: { hostId: session.uuid },
    include: { host: true, media: true, reservations: true },
  });

  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
      <div className="flex items-center justify-between py-5 lg:py-6">
        <div className="group flex items-center space-x-1">
          <h2 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
            Properties
          </h2>
          <HostPropertiesDropdown />
        </div>

        {/* <HostPropertiesAction /> */}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {properties.map((property) => (
          <PropertiesListCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
};

export default HostPropertiesPage;
