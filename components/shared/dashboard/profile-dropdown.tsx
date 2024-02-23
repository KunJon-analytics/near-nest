import React from "react";
import { CircleUser } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/shared/user-avatar";
import { getSession } from "@/actions/session";

import ProfileDropdownItems from "./profile-dropdown-items";

export async function Profile() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return (
      <Button variant="ghost" size="icon" className="border-0 avatar h-12 w-12">
        <CircleUser size={200} />
        <span className="absolute bottom-12 right-4 h-3.5 w-3.5 rounded-full border-2 border-white bg-error dark:border-navy-700"></span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border-0 avatar h-12 w-12"
        >
          <UserAvatar size={200} uuid={session.uuid} />
          <span className="absolute bottom-12 right-4 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"></span>
          <span className="sr-only">View Profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-20 w-64 rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700">
        <DropdownMenuLabel className="flex items-center space-x-4 rounded-t-lg bg-slate-100 py-5 px-4 dark:bg-navy-800">
          <div className="avatar h-14 w-14">
            <UserAvatar size={60} uuid={session.uuid} />
          </div>
          <div>
            <a
              href="#"
              className="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              {`@${session.username}`}
            </a>
            <p className="text-xs text-slate-400 dark:text-navy-300">Pioneer</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ProfileDropdownItems />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
