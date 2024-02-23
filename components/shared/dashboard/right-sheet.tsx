import { LayoutGrid } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RightSidebar from "./right-sidebar";

export const RightSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <LayoutGrid className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" />
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-80">
        <RightSidebar />
      </SheetContent>
    </Sheet>
  );
};
