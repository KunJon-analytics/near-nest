import { getDistance } from "geolib";

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
    ? properties
        .map((property) => {
          return {
            ...property,
            distance: getDistance(
              {
                latitude: property.latitude,
                longitude: property.longitude,
              },
              {
                latitude: Number(session.latitude),
                longitude: Number(session.longitude),
              }
            ),
          };
        })
        .sort((a, b) => a.distance - b.distance)
    : properties;

  return (
    <div className="">
      <Amenities />
      {data.length === 0 ? (
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
            {data.map((property) => (
              <PropertyCard key={property.id} data={property} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}
