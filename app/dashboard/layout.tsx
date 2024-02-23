import React from "react";

import Sidebar from "@/components/shared/dashboard/sidebar";
import Navbar from "@/components/shared/dashboard/navbar";
import Signin from "@/components/shared/dashboard/signin";
import { getSession } from "@/actions/session";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();

  return (
    // <!-- Page Wrapper -->
    <>
      <div className="dashboard h-full bg-slate-50 dark:bg-navy-900">
        <div className="h-[64px] md:pl-20 fixed inset-y-0 w-full z-50">
          <Navbar />
        </div>
        <div className="hidden md:flex h-full w-20 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div>
        <main className="md:pl-20 pt-[64px] h-full">
          {session.isLoggedIn ? children : <Signin />}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
