"use client";

import Image from "next/image";

import { PropertyReturnType } from "@/types";
import { getByValue } from "@/lib/utils";
import Heading from "@/components/shared/heading";
import PropertyImageSlider from "./property-image-slider";

interface PropertyHeadProps {
  property: Omit<PropertyReturnType, "reservations">;
}

const PropertyHead: React.FC<PropertyHeadProps> = ({ property }) => {
  const location = getByValue(property.latitude, property.longitude);

  return (
    <>
      <Heading
        title={property.title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <PropertyImageSlider property={property} />
      </div>
    </>
  );
};

export default PropertyHead;
