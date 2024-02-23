"use client";

import React, { useState } from "react";
import { Bell, Trash2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Tabs = "tabAll" | "tabAlerts" | "tabEvents" | "tabLogs";

export function Notifications() {
  const [activeTab, setActiveTab] = useState<Tabs>("tabAll");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="border-0">
          <Bell className="h-5 w-5 text-slate-500 dark:text-navy-100" />
          <span className="sr-only">View Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 mx-4">
        <DropdownMenuLabel className="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-slate-700 dark:text-navy-100">
                Notifications
              </h3>
              <div className="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light">
                0
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="btn -mr-1.5 h-7 w-7 border-0 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <Trash2 className="h-4.5 w-4.5" />
              <span className="sr-only">Clear Notifications</span>
            </Button>
          </div>
          <div className="is-scrollbar-hidden flex shrink-0 overflow-x-auto px-3">
            <button
              //   @click="activeTab = 'tabAll'"
              //   :className="activeTab === 'tabAll' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
              className="btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
            >
              <span>All</span>
            </button>
            <button
              //   @click="activeTab = 'tabAlerts'"
              //   :className="activeTab === 'tabAlerts' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
              className="btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
            >
              <span>Alerts</span>
            </button>
            <button
              //   @click="activeTab = 'tabEvents'"
              //   :className="activeTab === 'tabEvents' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
              className="btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
            >
              <span>Events</span>
            </button>
            <button
              //   @click="activeTab = 'tabLogs'"
              //   :className="activeTab === 'tabLogs' ? 'border-primary dark:border-accent text-primary dark:text-accent-light' : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
              className="btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
            >
              <span>Logs</span>
            </button>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div className="is-scrollbar-hidden overflow-y-auto px-4">
              <div className="mt-8 pb-8 text-center">
                <Image
                  className="mx-auto w-36"
                  src="images/illustrations/empty-girl-box.svg"
                  alt="image"
                  width="236"
                  height="298"
                />
                <div className="mt-5">
                  <p className="text-base font-semibold text-slate-700 dark:text-navy-100">
                    No any notifications
                  </p>
                  <p className="text-slate-400 dark:text-navy-300">
                    There are no unread notifications yet
                  </p>
                </div>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
