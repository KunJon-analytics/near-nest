"use client";

import Image from "next/image";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

import { PropertyReturnType } from "@/types";
import { Button } from "@/components/ui/button";

import "photoswipe/dist/photoswipe.css";

interface IProps {
  property: PropertyReturnType;
}

const PropertyImageSlider = ({ property }: IProps) => (
  <Gallery>
    <Item
      original={property.media[0].url || "/images/800*600.png"}
      thumbnail={property.media[0].url || "/images/800*600.png"}
      width={800}
      height={600}
    >
      {({ ref, open }) => (
        <div className="relative">
          <Image
            src={property.media[0].url || "/images/800*600.png"}
            width={800}
            height={600}
            ref={ref}
            onClick={open}
            alt="image"
            role="button"
            className="mt-5 h-80 w-full rounded-lg object-cover object-center"
          />
          <Button
            variant={"outline"}
            onClick={open}
            className="absolute top-2 right-2 text-white bg-transparent dark:bg-transparent"
          >
            {`See All ${property.media.length} Photos`}
          </Button>
        </div>
      )}
    </Item>
    {property.media.slice(1).map((picture, index) => (
      <Item
        original={picture.url}
        thumbnail={picture.url}
        width="800"
        height="600"
        key={picture.id}
      >
        {({ ref, open }) => (
          <Image
            ref={ref}
            onClick={open}
            className="mt-5 h-80 w-full rounded-lg object-cover object-center hidden"
            src={picture.url}
            alt={`${picture.name} image`}
            width={800}
            height={600}
          />
        )}
      </Item>
    ))}
  </Gallery>
);

export default PropertyImageSlider;
