"use client";

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import { differenceInDays, eachDayOfInterval } from "date-fns";

import { useToast } from "@/components/ui/use-toast";
import { PropertyReturnType, ReservationReturnType } from "@/types";
import { getSession } from "@/actions/session";
import Container from "@/components/shared/container";

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
}

const PropertyClient: React.FC<PropertyClientProps> = ({
  property,
  reservations = [],
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.checkInDate),
        end: new Date(reservation.checkOutDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(property.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateReservation = useCallback(async () => {
    const session = await getSession();
    if (!session.isLoggedIn) {
      toast({
        description: "You are currently not logged in",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);

    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        propertyId: property.id,
      })
      .then(() => {
        toast({
          description: "Property reserved!",
        });
        setDateRange(initialDateRange);
        router.push("/trips");
      })
      .catch(() => {
        toast({
          description: "Something went wrong.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [totalPrice, dateRange, property.id, router]);

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
