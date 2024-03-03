"use client";

import { PropertyReturnType } from "@/types";

import Heading from "@/components/shared/heading";
import PropertyImageSlider from "./property-image-slider";

interface PropertyHeadProps {
  property: Omit<PropertyReturnType, "reservations">;
  distance: number;
  isLoggedIn: boolean;
}

const PropertyHead: React.FC<PropertyHeadProps> = ({
  property,
  distance,
  isLoggedIn,
}) => {
  return (
    <>
      <Heading
        title={property.title}
        subtitle={
          isLoggedIn
            ? `You are ${distance}m away from this property`
            : "Log in to find how far away you are from this property"
        }
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
