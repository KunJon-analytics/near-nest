import React from "react";

import { getSession } from "@/actions/session";

import { MobileSidebar } from "./mobile-sidebar";
import { Notifications } from "./notifications";
import { RightSheet } from "./right-sheet";
import SignInForm from "../sign-in-form";
import { ModeToggle } from "../layout/mode-toggle";

const Navbar = async () => {
  const session = await getSession();
  return (
    <nav className="border-b border-slate-150 transition-all duration-250 dark:border-navy-700 h-full flex items-center shadow-sm bg-white dark:bg-navy-750">
      {/* <!-- App Header  --> */}

      <div className="flex w-full items-center justify-between px-4 md:px-16">
        {/* <!-- Left: Sidebar Toggle Button --> */}
        <div className="h-7 w-7">
          <MobileSidebar />
        </div>
        <div className="-mr-1.5 flex items-center space-x-2">
          <ModeToggle />
          {session.isLoggedIn ? (
            <>
              <div className="flex">
                <Notifications />
              </div>
              <RightSheet />
            </>
          ) : (
            <SignInForm />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
