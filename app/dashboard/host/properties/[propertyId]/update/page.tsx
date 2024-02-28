import Link from "next/link";
import React from "react";

import { getStage } from "@/lib/utils";

import UpdateTabs from "./_components/update-tabs";
import UpdateFormLayout from "./_components/update-form-layout";

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
  const stage = getStage(searchParams.stage);

  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          Update Property
        </h2>
        <div className="hidden h-full py-1 sm:flex">
          <div className="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
        </div>
        <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
          <li className="flex items-center space-x-2">
            <Link
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="/dashboard/host/properties"
            >
              Properties
            </Link>
            <svg
              //   x-ignore
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>Update Property</li>
        </ul>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        <UpdateTabs stage={stage} propertyId={params.propertyId} />
        <div className="col-span-12 grid lg:col-span-8">
          <UpdateFormLayout propertyId={params.propertyId} stage={stage} />
        </div>
      </div>
    </main>
  );
};

export default PropertyUpdatePage;
