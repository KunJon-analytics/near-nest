import React from "react";

import { PropertyReturnType } from "@/types";
import { Button } from "@/components/ui/button";
import { Bath, Bed, Users } from "lucide-react";

interface IProps {
  property: PropertyReturnType;
}

const PropertyDetailsFooter = ({ property }: IProps) => {
  return (
    <div className="mt-5 flex space-x-3">
      <Button
        variant={"outline"}
        className="btn space-x-2 rounded-full border border-slate-300 px-4 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:bg-transparent dark:active:bg-navy-500/90"
      >
        <Bed className="h-4.5 w-4.5 text-slate-400 dark:text-navy-300" />

        <span> {property.totalBedroom}</span>
      </Button>
      <Button
        variant={"outline"}
        className="btn space-x-2 rounded-full border border-slate-300 px-4 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:bg-transparent dark:active:bg-navy-500/90"
      >
        <Bath className="h-4.5 w-4.5 text-slate-400 dark:text-navy-300" />

        <span> {property.totalBathroom}</span>
      </Button>
      <Button
        variant={"outline"}
        className="btn space-x-2 rounded-full border border-slate-300 px-4 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:bg-transparent dark:active:bg-navy-500/90"
      >
        <Users className="h-4.5 w-4.5 text-slate-400 dark:text-navy-300" />

        <span> {property.maxOccupancy}</span>
      </Button>
    </div>
  );
};

export default PropertyDetailsFooter;
