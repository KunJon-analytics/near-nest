"use client";

import Image from "next/image";

import { PropertyReturnType } from "@/types";
import { getByValue } from "@/lib/utils";
import Heading from "@/components/shared/heading";

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
        <Image
          src={property.media[0].url}
          fill
          className="object-cover w-full"
          alt="Image"
        />
      </div>
    </>
  );
};

export default PropertyHead;
