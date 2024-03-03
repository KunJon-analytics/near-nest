import React from "react";

import prisma from "@/lib/prisma";
import { getSession } from "@/actions/session";

import PropertyCard from "../../_components/properties/property-card";

const PropertiesLayout = async () => {
  const session = await getSession();
  const properties = await prisma.property.findMany({
    where: { hostId: session.uuid },
    include: { media: true },
  });

  return (
    <div className="mt-4 pl-[var(--margin-x)] transition-all sm:mt-5 lg:mt-6">
      <div className="rounded-l-lg bg-slate-150 pt-4 pb-1 dark:bg-navy-800">
        <h2 className="px-4 text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 sm:px-5 lg:text-lg">
          Properties
        </h2>
        <div className="scrollbar-sm mt-4 flex space-x-4 overflow-x-auto px-4 pb-4 sm:px-5">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesLayout;
