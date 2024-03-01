import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { AirVent, Heater, Tv, Waves, Wifi, ChefHat } from "lucide-react";

import { PropertyReturnType } from "@/types";
import { Button } from "@/components/ui/button";

import { PropertyDetailDropdown } from "./property-detail-dropdown";

interface IProps {
  property: PropertyReturnType;
}

const HostCard = ({ property }: IProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex">
            <div x-ref="popperRef" className="avatar h-12 w-12">
              <Image
                className="mask is-squircle"
                src={property.host.profilePicUrl || "/images/200x200.png"}
                alt="avatar"
                height={200}
                width={200}
              />
            </div>
          </div>
          <div>
            <Link
              href="/dashboard/host"
              className="font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              {property.host.name}
            </Link>
            <div className="mt-1.5 flex items-center text-xs">
              <span className="line-clamp-1">{property.status}</span>
              <div className="mx-2 my-0.5 w-px self-stretch bg-white/20"></div>
              <p className="shrink-0">
                {formatDistanceToNow(property.createdAt, { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="hidden sm:flex">
            {property.hasPool && (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <Waves className="h-5 w-5" />
              </Button>
            )}
            {property.hasHeating && (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <Heater className="h-5 w-5" />
              </Button>
            )}
            {property.hasAirCon && (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <AirVent className="h-5 w-5" />
              </Button>
            )}
            {property.hasKitchen && (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <ChefHat className="h-5 w-5" />
              </Button>
            )}
            {property.hasInternet && (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <Wifi className="h-5 w-5" />
              </Button>
            )}
            {property.hasTv && (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <Tv className="h-5 w-5" />
              </Button>
            )}
          </div>
          <PropertyDetailDropdown propertyId={property.id} />
        </div>
      </div>
      <div className="mt-6 flex items-center space-x-3 sm:hidden">
        <Button
          variant={"ghost"}
          size={"icon"}
          asChild
          className="btn space-x-2 rounded-full border border-slate-300 px-4 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
        >
          <Link href={`/dashboard/host/properties/${property.id}/update`}>
            Edit
          </Link>
        </Button>
        <div className="flex">
          {property.hasPool && (
            <Button
              variant={"ghost"}
              size={"icon"}
              className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <Waves className="h-5 w-5" />
            </Button>
          )}
          {property.hasAirCon && (
            <Button
              variant={"ghost"}
              size={"icon"}
              className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <AirVent className="h-5 w-5" />
            </Button>
          )}
          {property.hasHeating && (
            <Button
              variant={"ghost"}
              size={"icon"}
              className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <Heater className="h-5 w-5" />
            </Button>
          )}
          {property.hasTv && (
            <Button
              variant={"ghost"}
              size={"icon"}
              className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <Tv className="h-5 w-5" />
            </Button>
          )}
          {property.hasInternet && (
            <Button
              variant={"ghost"}
              size={"icon"}
              className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <Wifi className="h-5 w-5" />
            </Button>
          )}
          {property.hasKitchen && (
            <Button
              variant={"ghost"}
              size={"icon"}
              className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <ChefHat className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostCard;
