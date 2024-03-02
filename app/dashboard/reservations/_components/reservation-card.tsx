import React from "react";
import Image from "next/image";
import Link from "next/link";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { Info } from "lucide-react";

import { ReservationReturnType } from "@/types";
import { cn, getReservationColor } from "@/lib/utils";

import PayButton from "../[reservationId]/_components/pay-button";

interface Iprops {
  data: ReservationReturnType;
}

const ReservationCard = ({ data }: Iprops) => {
  const noOfDaysReserved = differenceInDays(
    data.checkOutDate,
    data.checkInDate
  );
  const isMultipleDays = noOfDaysReserved > 1;
  const color = getReservationColor(data.status);
  return (
    <div className="card">
      <Image
        className="h-72 w-full rounded-lg object-cover object-center"
        src="/images/reservation.jpg"
        alt="image"
        height={600}
        width={800}
      />
      <div className="absolute inset-0 flex h-full w-full flex-col justify-end">
        <div className="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12">
          <div className="line-clamp-2">
            <Link
              href={`/dashboard/reservations/${data.id}`}
              className="text-base font-medium text-white"
            >
              {`${noOfDaysReserved} Night${
                isMultipleDays ? "s" : ""
              } reservation at ${data.property.title}`}
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-slate-200">
              <p className="flex items-center space-x-1">
                <Info
                  className={cn(
                    "h-3.5 w-3.5",
                    `text-${color} dark:text-${color}`
                  )}
                />

                <span
                  className={cn(
                    "line-clamp-1",
                    `text-${color} dark:text-${color}`
                  )}
                >
                  {data.status}
                </span>
              </p>
              <div className="mx-3 my-0.5 w-px self-stretch bg-white/20"></div>
              <p className="shrink-0 text-tiny+">
                {formatDistanceToNow(data.createdAt, { addSuffix: true })}
              </p>
            </div>
            <div className="-mr-1.5 flex">
              {data.status === "PENDING" && (
                <PayButton
                  reservation={data}
                  className="btn h-7 w-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
