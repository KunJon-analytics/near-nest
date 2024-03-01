"use client";

import dynamic from "next/dynamic";

import { PropertyReturnType } from "@/types";

import AvatarIcon from "@/components/shared/user-avatar";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

interface ProperyInfoProps {
  property: Omit<PropertyReturnType, "reservations">;
}

const ProperyInfo: React.FC<ProperyInfoProps> = ({ property }) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by {property.host.name}</div>
          <AvatarIcon uuid={property.host.userId} size={30} />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>{property.maxOccupancy} guests</div>
          <div>{property.totalBedroom} rooms</div>
          <div>{property.totalBathroom} bathrooms</div>
        </div>
      </div>

      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {property.description}
      </div>
      <hr />
      <Map center={[property.latitude, property.longitude]} />
    </div>
  );
};

export default ProperyInfo;
