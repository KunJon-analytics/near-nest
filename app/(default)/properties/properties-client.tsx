import Container from "@/components/shared/container";
import Heading from "@/components/shared/heading";
import PropertyCard from "@/components/shared/property-card";
import { PropertyReturnType } from "@/types";

interface PropertiesClientProps {
  properties: PropertyReturnType[];
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({ properties }) => {
  return (
    <Container>
      <Heading
        title="Properties"
        subtitle="Start making your reservations now"
      />
      <div
        className="
          mt-10
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
        {properties.map((property: any) => (
          <PropertyCard key={property.id} data={property} />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
