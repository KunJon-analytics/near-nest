import { Info } from "lucide-react";
import React from "react";

import GeneralForm from "./general-form";

const CreateFormLayout = () => {
  return (
    <div className="card">
      <div className="border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5">
        <div className="flex items-center space-x-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 p-1 text-primary dark:bg-accent-light/10 dark:text-accent-light">
            <Info className="fa-solid" />
          </div>
          <h4 className="text-lg font-medium text-slate-700 dark:text-navy-100">
            General
          </h4>
        </div>
      </div>
      <GeneralForm />
    </div>
  );
};

export default CreateFormLayout;
