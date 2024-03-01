import React from "react";
import Image from "next/image";
import { ChefHat, Eye, Pencil, Waves, Wifi } from "lucide-react";
import Link from "next/link";

import { PropertyReturnType } from "@/types";
import { Button } from "@/components/ui/button";

interface IProps {
  property: PropertyReturnType;
}

const PropertiesListCard = ({ property }: IProps) => {
  return (
    <div className="card">
      <div className="h-24 rounded-t-lg bg-primary dark:bg-accent">
        <Image
          className="h-full w-full rounded-t-lg object-cover object-center"
          src={property.media[0].url || "/images/800x600.png"}
          alt="image"
          width={800}
          height={600}
        />
      </div>
      <div className="px-4 py-2 sm:px-5">
        <div className="flex justify-between space-x-4">
          <div className="avatar -mt-12 h-20 w-20">
            <Image
              className="rounded-full border-2 border-white dark:border-navy-700"
              src={property.media[1].url || "/images/200x200.png"}
              alt="avatar"
              width={200}
              height={200}
            />
          </div>
          <div className="flex space-x-2">
            {property.hasPool && (
              <Button
                size={"icon"}
                variant={"ghost"}
                className="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                <Waves className="h-4 w-4" />
              </Button>
            )}
            {property.hasInternet && (
              <Button
                size={"icon"}
                variant={"ghost"}
                className="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                <Wifi className="h-4 w-4" />
              </Button>
            )}
            {property.hasKitchen && (
              <Button
                size={"icon"}
                variant={"ghost"}
                className="btn h-7 w-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
              >
                <ChefHat className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <h3 className="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100">
          {property.title}
        </h3>
        <p className="text-xs">{property.type}</p>

        <div className="flex justify-center space-x-3 py-3">
          <Button
            size={"icon"}
            variant={"ghost"}
            asChild
            className="btn h-9 w-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <Link href={`/dashboard/host/properties/${property.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            asChild
            className="btn h-9 w-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <Link href={`/dashboard/host/properties/${property.id}/update`}>
              <Pencil className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesListCard;
