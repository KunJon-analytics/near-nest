import { AirVent, ChefHat, Heater, Tv, Waves, Wifi } from "lucide-react";
import { Suspense } from "react";

import { PropertyFilterType } from "@/types";
import Container from "@/components/shared/container";
import { getSession } from "@/actions/session";

import AmenityBox from "./amenity-box";

export const amenities: PropertyFilterType[] = [
  {
    label: "hasTv",
    icon: Tv,
    name: "Tv",
    description: "This property has Tv",
  },
  {
    label: "hasKitchen",
    name: "Kitchen",
    icon: ChefHat,
    description: "This property has Kitchen",
  },
  {
    label: "hasAirCon",
    name: "AC",
    icon: AirVent,
    description: "This property has Air Conditioner",
  },
  {
    label: "hasHeating",
    name: "Heating",
    icon: Heater,
    description: "This property has Heating",
  },
  {
    label: "hasInternet",
    name: "Internet",
    icon: Wifi,
    description: "This property has Internet",
  },
  {
    label: "hasPool",
    name: "Pool",
    icon: Waves,
    description: "This property has Pool",
  },
];

const Amenities = async () => {
  const session = await getSession();
  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {session.isLoggedIn && (
          <AmenityBox label={"useLocation"} name={"Location"} />
        )}
        {amenities.map((item) => (
          <Suspense key={item.name}>
            <AmenityBox key={item.label} label={item.label} name={item.name} />
          </Suspense>
        ))}
      </div>
    </Container>
  );
};

export default Amenities;
