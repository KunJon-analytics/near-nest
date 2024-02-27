import React from "react";

interface PropertyUpdatePageProps {
  params: { propertyId: string };
  searchParams: {
    stage: string | undefined;
  };
}

const PropertyUpdatePage = async ({
  params,
  searchParams,
}: PropertyUpdatePageProps) => {
  console.log({ params, searchParams });
  return <div>PropertyUpdatePage</div>;
};

export default PropertyUpdatePage;
