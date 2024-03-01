import React from "react";

import { UserDropdown } from "./user-dropdown";
import IncomeChart from "./income-chart";

const IncomeCard = () => {
  return (
    <div className="card">
      <div className="mt-3 flex items-center justify-between px-4 sm:px-5">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Spent
        </h2>

        <UserDropdown />
      </div>
      <p className="grow px-4 text-xl font-semibold text-slate-700 dark:text-navy-100 sm:px-5">
        $34.6k
      </p>
      <div className="ax-transparent-gridline">
        <IncomeChart />
      </div>
    </div>
  );
};

export default IncomeCard;
