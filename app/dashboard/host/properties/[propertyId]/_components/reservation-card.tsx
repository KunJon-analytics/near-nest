import Image from "next/image";
import React from "react";
import { differenceInDays, format } from "date-fns";
import Link from "next/link";

import { Reservation } from "@prisma/client";
import AvatarIcon from "@/components/shared/user-avatar";

interface IProps {
  reservation: Reservation;
}

const ReservationCard = ({ reservation }: IProps) => {
  const difference = differenceInDays(
    reservation.checkOutDate,
    reservation.checkInDate
  );
  const isPlural = difference > 1;

  return (
    <div className="card lg:flex-row">
      <Image
        className="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
        src="/images/reservation.jpg"
        alt="image"
        width={800}
        height={600}
      />
      <div className="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between">
          <a className="text-xs+ text-info" href="#">
            {reservation.status}
          </a>
        </div>
        <div>
          <Link
            href={`/dashboard/host/reservations/${reservation.id}`}
            className="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >
            {`Reservation for ${difference} night${isPlural ? "s" : ""}`}
          </Link>
        </div>

        <div className="grow">
          <div className="mt-2 flex items-center text-xs">
            <Link
              href={`/dashboard/host/reservations/${reservation.id}`}
              className="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <AvatarIcon size={40} uuid={reservation.userId} />

              <span className="line-clamp-1">
                {format(reservation.checkInDate, "MM/dd/yyyy")}
              </span>
            </Link>
            <div className="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
            <span className="shrink-0 text-slate-400 dark:text-navy-300">
              {format(reservation.checkOutDate, "MM/dd/yyyy")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
