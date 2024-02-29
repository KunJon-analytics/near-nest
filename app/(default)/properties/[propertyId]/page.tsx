import { getPropertyById } from "@/actions/properties";
import { getReservations } from "@/actions/reservations";

import EmptyState from "../../_components/empty-state";
import PropertyClient from "./_components/property-client";
import { getSession } from "@/actions/session";

interface IParams {
  propertyId?: string;
}

const PropertyPage = async ({ params }: { params: IParams }) => {
  const property = await getPropertyById(params);
  const reservations = await getReservations(params);
  const session = await getSession();

  if (!property) {
    return <EmptyState />;
  }

  return (
    <PropertyClient
      property={property}
      reservations={reservations}
      isLoggedIn={session.isLoggedIn}
    />
  );
};

export default PropertyPage;
