"use client";

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { usePathname, useRouter } from "next/navigation";
import {
  differenceInDays,
  eachDayOfInterval,
  isEqual,
  subDays,
  addDays,
} from "date-fns";

import { useToast } from "@/components/ui/use-toast";
import { PropertyReturnType, ReservationReturnType } from "@/types";
import Container from "@/components/shared/container";
import { createReservation } from "@/actions/reservations";

import PropertyHead from "./property-head";
import ProperyInfo from "./property-info";
import PropertyReservation from "./property-reservation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface PropertyClientProps {
  reservations?: ReservationReturnType[];
  property: Omit<PropertyReturnType, "reservations">;
  isLoggedIn: boolean;
}

const PropertyClient: React.FC<PropertyClientProps> = ({
  property,
  reservations = [],
  isLoggedIn,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    const confirmedReservations = reservations.filter((reservation) => {
      return reservation.status === "CONFIRMED";
    });

    confirmedReservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.checkInDate),
        end: subDays(new Date(reservation.checkOutDate), 1),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(property.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateReservation = useCallback(async () => {
    if (!isLoggedIn) {
      toast({
        description:
          "You are currently not logged in, please login to continue",
        variant: "destructive",
      });
      return router.push(`/dashboard/login?redirect=${pathname}`);
    }
    if (!dateRange.startDate || !dateRange.endDate) {
      return toast({
        description: "No date was selected",
        variant: "destructive",
      });
    }
    setIsLoading(true);

    try {
      const isSameDate = isEqual(dateRange.endDate, dateRange.startDate);

      const response = await createReservation({
        checkInDate: dateRange.startDate,
        checkOutDate: isSameDate
          ? addDays(dateRange.endDate, 1)
          : dateRange.endDate,
        propertyId: property.id,
        totalPrice,
      });

      if (response.success) {
        toast({
          description: "Property reserved!",
        });
        setDateRange(initialDateRange);
        return router.push(`/reservations/${response.success}`);
      }

      toast({
        description: `${response.error}`,
        variant: "destructive",
      });
    } catch (error) {
      console.log(error);
      toast({
        description: "Something went wrong.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  }, [totalPrice, dateRange, property.id, router, isLoggedIn]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && property.price) {
        setTotalPrice(dayCount * property.price);
      } else {
        setTotalPrice(property.price);
      }
    }
  }, [dateRange, property.price]);

  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <PropertyHead property={property} />
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ProperyInfo property={property} />
            <div
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
              <PropertyReservation
                price={property.price}
                totalPrice={totalPrice}
                onChangeDate={(value: Range) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PropertyClient;
