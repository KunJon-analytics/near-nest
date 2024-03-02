import { PropertyReturnType } from "@/types";
import { AirVent, ChefHat, Heater, Tv, Waves, Wifi } from "lucide-react";

interface PropertyFacilitiesProps {
  property: PropertyReturnType;
}

const PropertyFacilities: React.FC<PropertyFacilitiesProps> = ({
  property,
}) => {
  return (
    <div
      className="
        relative
        hover:opacity-80
        transition
        flex
        flex-col
        space-y-4
      "
    >
      {property.hasPool && <Waves />}
      {property.hasTv && <Tv />}
      {property.hasKitchen && <ChefHat />}
      {property.hasAirCon && <AirVent />}
      {property.hasHeating && <Heater />}
      {property.hasInternet && <Wifi />}
    </div>
  );
};

export default PropertyFacilities;
