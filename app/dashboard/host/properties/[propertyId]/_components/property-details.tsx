import React from "react";
import Image from "next/image";

import { PropertyReturnType } from "@/types";
import PropertyImageSlider from "./property-image-slider";

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
      <PropertyImageSlider property={property} />
      <br />
      <p>{property.address}</p>
    </div>
  );
};

export default PropertyDetails;
