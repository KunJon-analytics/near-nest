import { PropertiesParams } from "@/actions/properties";

import Amenities from "./_components/amenities";

interface HomeProps {
  searchParams: PropertiesParams;
}

export default function Home({ searchParams }: HomeProps) {
  console.log({ searchParams });
  return (
    <div className="">
      <Amenities />
    </div>
  );
}
