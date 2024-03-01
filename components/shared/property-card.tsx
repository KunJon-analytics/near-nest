"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { PropertyReturnType } from "@/types";

interface PropertyCardProps {
  data: PropertyReturnType;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/properties/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data?.media[0]?.url || "/images/800x600.png"}
            alt="Listing"
          />
        </div>
        <div className="font-semibold text-lg">
          {/* {location?.region}, {location?.label} */}
          Lagos, Nigeria
        </div>
        <div className="font-light text-neutral-500">{data.rating}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">π {data.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
