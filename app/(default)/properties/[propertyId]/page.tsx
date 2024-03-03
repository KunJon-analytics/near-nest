import { getDistance } from "geolib";

import { getPropertyById } from "@/actions/properties";
import { getReservations } from "@/actions/reservations";
import { getSession } from "@/actions/session";

import EmptyState from "../../_components/empty-state";
import PropertyClient from "./_components/property-client";

interface IParams {
  propertyId?: string;
}

const PropertyPage = async ({ params }: { params: IParams }) => {
  const property = await getPropertyById(params);
  const reservations = await getReservations(params);
  const session = await getSession();
  const checkDistance = session.isLoggedIn && !!property;
  const distance = checkDistance
    ? getDistance(
        {
          latitude: property.latitude,
          longitude: property.longitude,
        },
        {
          latitude: Number(session.latitude),
          longitude: Number(session.longitude),
        }
      )
    : 0;

  if (!property) {
    return <EmptyState />;
  }

  return (
    <PropertyClient
      distance={distance}
      property={property}
      reservations={reservations}
      isLoggedIn={session.isLoggedIn}
    />
  );
};

export default PropertyPage;
