import React from "react";
import Link from "next/link";

import { Stage } from "@/lib/utils";
import { tabElements } from "@/config/dashboard-links";

interface UpdateTabsProps {
  stage: Stage;
  propertyId?: string;
}

const UpdateTabs = ({ stage, propertyId }: UpdateTabsProps) => {
  return (
    <div className="col-span-12 grid lg:col-span-4 lg:place-items-center">
      <div>
        <ol className="steps is-vertical line-space [--size:2.75rem] [--line:.5rem]">
          {tabElements.map((element, index) => {
            const { icon: Icon, name, title } = element;
            const elementNumber = index + 1;
            return (
              <li
                className={`step space-x-4 ${
                  elementNumber !== tabElements.length && "pb-12"
                } before:bg-slate-200 dark:before:bg-navy-500`}
                key={title}
              >
                <div
                  className={
                    stage === title
                      ? "step-header mask is-hexagon bg-primary text-white dark:bg-accent"
                      : "step-header mask is-hexagon bg-slate-200 text-slate-500 dark:bg-navy-500 dark:text-navy-100"
                  }
                >
                  <Icon className="fa-solid text-base" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 dark:text-navy-300">
                    {`Step ${elementNumber}`}
                  </p>
                  <h3
                    className={
                      stage === title
                        ? "text-base font-medium text-primary dark:text-accent-light"
                        : "text-base font-medium"
                    }
                  >
                    <Link
                      href={`/dashboard/host/properties/${propertyId}/update?stage=${title}`}
                    >
                      {name}
                    </Link>
                  </h3>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default UpdateTabs;
