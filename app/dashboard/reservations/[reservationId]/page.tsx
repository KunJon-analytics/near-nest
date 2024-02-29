import React from "react";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Twitter } from "lucide-react";
import Link from "next/link";

import { getSession } from "@/actions/session";
import prisma from "@/lib/prisma";
import { siteConfig } from "@/config/site";
import { platformFee } from "@/config/default";

import PrintButton from "./_components/print-button";
import PayButton from "./_components/pay-button";

interface IParams {
  reservationId?: string;
}

const ReservationDetailPage = async ({ params }: { params: IParams }) => {
  const session = await getSession();
  const reservation = await prisma.reservation.findUnique({
    where: { id: params.reservationId, userId: session.uuid },
    include: { property: true },
  });

  if (!reservation) {
    notFound();
  }

  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
      <div className="flex items-center justify-between py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
          Reservation
        </h2>

        <div className="flex">
          <PrintButton />
          {reservation.status === "PENDING" && (
            <PayButton reservation={reservation} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="card px-5 py-12 sm:px-18">
          <div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold uppercase text-primary dark:text-accent-light">
                {siteConfig.name}
              </h2>
              <div className="space-y-1 pt-2">
                <p className="flex align-middle justify-center">
                  <Twitter className="mr-4" />
                  <Link href={siteConfig.links.twitter} target="_blank">
                    @kunjongroup
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
          <div className="flex flex-col justify-between sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold uppercase text-slate-600 dark:text-navy-100">
                reservation
              </h2>
              <div className="space-y-1 pt-2">
                <p>
                  Invoice #:{" "}
                  <span className="font-semibold">{reservation.id}</span>
                </p>
                <p>
                  Check In:{" "}
                  <span className="font-semibold">
                    {format(reservation.checkInDate, "MM/dd/yyyy")}
                  </span>
                </p>
                <p>
                  Check Out:{" "}
                  <span className="font-semibold">
                    {format(reservation.checkOutDate, "MM/dd/yyyy")}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:text-right">
              <p className="text-lg font-medium text-slate-600 dark:text-navy-100">
                Invoiced To:
              </p>
              <div className="space-y-1 pt-2">
                <p className="font-semibold">@{session.username}</p>
              </div>
            </div>
          </div>

          <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
          <div className="flex flex-col justify-between sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-slate-600 dark:text-navy-100">
                Status:
              </p>
              <div className="space-y-1 pt-2">
                <p className="font-medium">{reservation.status}</p>
              </div>
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:text-right">
              <p className="text-lg font-medium text-slate-600 dark:text-navy-100">
                Total:
              </p>
              <div className="space-y-1 pt-2">
                <p>
                  Host :{" "}
                  <span className="font-medium">
                    π{(reservation.totalPrice * 90) / 100}
                  </span>
                </p>

                <p>
                  Near Next Fee :{" "}
                  <span className="font-medium">{platformFee}%</span>
                </p>
                <p className="text-lg text-primary dark:text-accent-light">
                  Total:{" "}
                  <span className="font-medium">{reservation.totalPrice}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReservationDetailPage;
