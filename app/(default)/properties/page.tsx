import { getProperties } from "@/actions/properties";
import { PropertiesParams } from "@/types";

import EmptyState from "../_components/empty-state";
import PropertiesClient from "./properties-client";

interface IProps {
  searchParams: PropertiesParams;
}

const PropertiesPage = async ({ searchParams }: IProps) => {
  const properties = await getProperties(searchParams);

  if (properties.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like there are no listed properties."
      />
    );
  }

  return <PropertiesClient properties={properties} />;
};

export default PropertiesPage;
