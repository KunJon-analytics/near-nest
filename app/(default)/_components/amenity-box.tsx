"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { LocateFixed } from "lucide-react";

import { amenities } from "./amenities";

interface AmenityBoxProps {
  label: string;
  name: string;
}

const AmenityBox: React.FC<AmenityBoxProps> = ({ label, name }) => {
  const router = useRouter();
  const params = useSearchParams();
  const selected = params?.get(label);

  const Icon = useMemo(() => {
    const activeAmenity = amenities.find((amenity) => amenity.label === label);
    return activeAmenity?.icon || LocateFixed;
  }, [label]);

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      [label]: true,
    };

    if (params?.get(label)) {
      delete updatedQuery[label];
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        dark:hover:text-neutral-200
        transition
        cursor-pointer
        ${
          selected
            ? "border-b-neutral-800 dark:border-b-neutral-200"
            : "border-transparent"
        }
        ${
          selected
            ? "text-neutral-800 dark:text-neutral-200"
            : "text-neutral-500"
        }
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{name}</div>
    </div>
  );
};

export default AmenityBox;
