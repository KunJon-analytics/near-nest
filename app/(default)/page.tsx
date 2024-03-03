import { orderByDistance } from "geolib";

import Container from "@/components/shared/container";
import { PropertiesParams } from "@/types";
import { getProperties } from "@/actions/properties";
import { getSession } from "@/actions/session";
import PropertyCard from "@/components/shared/property-card";

import Amenities from "./_components/amenities";
import EmptyState from "./_components/empty-state";

interface HomeProps {
  searchParams: PropertiesParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const properties = await getProperties(searchParams);
  const session = await getSession();
  const useLocation = !!searchParams.useLocation && session.isLoggedIn;
  const data = useLocation
    ? orderByDistance(
        {
          latitude: Number(session.latitude),
          longitude: Number(session.longitude),
        },
        properties
      )
    : properties;

  return (
    <div className="">
      <Amenities />
      {properties.length === 0 ? (
        <EmptyState showReset />
      ) : (
        <Container>
          <div
            className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
          >
            {properties.map((property) => (
              <PropertyCard key={property.id} data={property} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}
