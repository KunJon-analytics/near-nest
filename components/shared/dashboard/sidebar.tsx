import Link from "next/link";
import React from "react";

import { getSession } from "@/actions/session";

import { Profile } from "./profile-dropdown";
import SidebarLinks from "./sidebar-links";
import { Icons } from "../icons";

const Sidebar = async () => {
  const session = await getSession();
  return (
    // <!-- Sidebar -->
    <div className="sidebar print:hidden">
      {/* <!-- Main Sidebar --> */}
      <div className="main-sidebar">
        <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
          {/* <!-- Application Logo --> */}
          <div className="flex pt-4">
            <Link href="/">
              <Icons.logo className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" />
            </Link>
          </div>

          <SidebarLinks isHost={session.isHost} />

          {/* <!-- Bottom Links --> */}
          <div className="flex flex-col items-center space-y-3 py-3 mt-16">
            {/* <!-- Settings --> */}
            {/* <Link
              href="/dashboard/profile"
              className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillOpacity="0.3"
                  fill="currentColor"
                  d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"
                />
                <path
                  fill="currentColor"
                  d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"
                />
              </svg>
            </Link> */}

            {/* <!-- Profile --> */}
            <div className="flex mt-40">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
