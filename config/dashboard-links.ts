import {
  LucideIcon,
  Home,
  Info,
  Building,
  Laugh,
  Images,
  Settings,
  BookMarked,
  PlusCircle,
} from "lucide-react";

import { Stage } from "@/lib/utils";

export type DashboardLink = {
  href: string;
  name: string;
  icon: LucideIcon;
};

const userDashboardLinks: DashboardLink[] = [
  { href: "/dashboard/user", icon: Home, name: "Dashboard" },
  { href: "/dashboard/reservations", icon: BookMarked, name: "Reservations" },
  { href: "/dashboard/be-a-host", icon: Building, name: "Start Hosting" },
];

const hostDashboardLinks: DashboardLink[] = [
  { href: "/dashboard/host", icon: Home, name: "Dashboard" },
  { href: "/dashboard/host/properties", icon: Building, name: "Properties" },
  {
    href: "/dashboard/host/reservations",
    icon: BookMarked,
    name: "Reservations",
  },
  {
    href: "/dashboard/host/properties/create",
    icon: PlusCircle,
    name: "Add property",
  },
];

export interface TabElement {
  title: Stage;
  icon: LucideIcon;
  name: string;
}

export const tabElements: TabElement[] = [
  { icon: Info, name: "General", title: "general" },
  { icon: Building, name: "Property Type", title: "type" },
  { icon: Laugh, name: "Facilities", title: "facilities" },
  { icon: Images, name: "Media", title: "media" },
  { icon: Settings, name: "Property Status", title: "status" },
];

export const getDashboardLinks = (isHost: boolean) => {
  return isHost ? hostDashboardLinks : userDashboardLinks;
};
