import React from "react";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getSession } from "@/actions/session";
import { Stage } from "@/lib/utils";
import { tabElements } from "@/config/dashboard-links";

import GeneralForm from "./forms/general-form";
import TypeForm from "./forms/type-forms";
import FacilitiesForm from "./forms/facilities-form";
import MediaForm from "./forms/media-form";

interface UpdateFormLayoutProps {
  propertyId: string;
  stage: Stage;
}

const UpdateFormLayout = async ({
  propertyId,
  stage,
}: UpdateFormLayoutProps) => {
  const session = await getSession();
  const property = await prisma.property.findUnique({
    where: { id: propertyId, hostId: session.uuid },
    include: { media: true },
  });
  const selectedStage = tabElements.find(
    (tabElement) => tabElement.title === stage
  );

  if (!property || !selectedStage) {
    notFound();
  }

  const { name, icon: Icon } = selectedStage;

  return (
    <div className="card">
      <div className="border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5">
        <div className="flex items-center space-x-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 p-1 text-primary dark:bg-accent-light/10 dark:text-accent-light">
            <Icon className="fa-solid" />
          </div>
          <h4 className="text-lg font-medium text-slate-700 dark:text-navy-100">
            {name}
          </h4>
        </div>
      </div>
      {stage === "general" && <GeneralForm property={property} />}
      {stage === "type" && <TypeForm property={property} />}
      {stage === "facilities" && <FacilitiesForm property={property} />}
      {stage === "media" && <MediaForm property={property} />}
    </div>
  );
};

export default UpdateFormLayout;
