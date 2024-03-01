import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import prisma from "@/lib/prisma";
import { getSession } from "@/actions/session";

import HostCard from "./_components/host-card";
import PropertyDetails from "./_components/property-details";
import PropertyDetailsFooter from "./_components/property-details-footer";
import ReservationCard from "./_components/reservation-card";
import MoreProperties from "./_components/more-properties";

interface IProps {
  params: { propertyId: string };
}

const PropertyDetailPage = async ({ params }: IProps) => {
  const session = await getSession();
  const property = await prisma.property.findUnique({
    where: { id: params.propertyId, hostId: session.uuid },
    include: { host: true, media: true, reservations: true },
  });

  if (!property) {
    notFound();
  }

  return (
    <main className="main-content w-full px-[var(--margin-x)]">
      <div className="grid grid-cols-12 lg:gap-6">
        <div className="col-span-12 pt-6 lg:col-span-8 lg:pb-6">
          <div className="card p-4 lg:p-6">
            {/* <!-- Host --> */}
            <HostCard property={property} />

            {/* <!-- Property Details --> */}
            <PropertyDetails property={property} />

            {/* <!-- Footer Property Details --> */}
            <PropertyDetailsFooter property={property} />
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-slate-800 dark:text-navy-100">
                Recent Reservations
              </p>
              <Link
                href="/dashboard/host/reservations"
                className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
              >
                View All
              </Link>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1 lg:gap-6">
              {property.reservations
                .reverse()
                .slice(0, 4)
                .map((reservation) => (
                  <ReservationCard
                    key={reservation.id}
                    reservation={reservation}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 py-6 lg:sticky lg:bottom-0 lg:col-span-4 lg:self-end">
          <div className="mt-5">
            <p className="border-b border-slate-200 pb-2 text-base text-slate-800 dark:border-navy-600 dark:text-navy-100">
              {`More properties from ${property.host.name}`}
            </p>
            <MoreProperties />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetailPage;
