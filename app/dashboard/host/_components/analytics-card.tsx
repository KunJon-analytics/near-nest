import React from "react";

import { HostDropdown } from "./host-dropdown";
import AnalyticsChart from "./analytics-chart";

const AnalyticsCard = () => {
  return (
    <div className="card pb-5">
      <div className="my-3 flex h-8 items-center justify-between px-4 sm:px-5">
        <h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
          Analytics
        </h2>

        <HostDropdown />
      </div>

      <div>
        <AnalyticsChart />
      </div>
      <div className="mx-auto mt-3 max-w-xs px-4 text-center text-xs+ sm:px-5">
        <p>Reservation analytics calculated based on reservations count</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
