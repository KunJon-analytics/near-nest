import React from "react";
import Image from "next/image";

import { PropertyReturnType } from "@/types";

interface IProps {
  property: PropertyReturnType;
}

const PropertyDetails = ({ property }: IProps) => {
  return (
    <div className="mt-6 font-inter text-base text-slate-600 dark:text-navy-200">
      <h1 className="text-xl font-medium text-slate-900 dark:text-navy-50 lg:text-2xl">
        {property.title}
      </h1>
      <h3 className="mt-1">{property.description}</h3>
      <Image
        className="mt-5 h-80 w-full rounded-lg object-cover object-center"
        src={property.media[0].url || "/images/800x600.png"}
        alt="image"
        width={800}
        height={600}
      />
    </div>
  );
};

export default PropertyDetails;
