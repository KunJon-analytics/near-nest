import {
  LucideIcon,
  Home,
  Landmark,
  HelpCircle,
  Route,
  BookUser,
  ArrowLeftRight,
  Info,
  Building,
  Laugh,
  Images,
  Settings,
} from "lucide-react";

import { Stage } from "@/lib/utils";

export type DashboardLink = {
  href: string;
  name: string;
  icon: LucideIcon;
};

const dashboardLinks: DashboardLink[] = [
  { href: "/dashboard", icon: Home, name: "Dashboard" },
  // { href: "/dashboard/marketplace", icon: Store, name: "Market" },
  { href: "/dashboard/offers/create", icon: Landmark, name: "Escrow" },
  { href: "/dashboard/offers", icon: ArrowLeftRight, name: "Offers" },
  { href: "/dashboard/steps", icon: Route, name: "Steps" },
  { href: "/dashboard/contact", icon: BookUser, name: "Contact" },
  { href: "/dashboard/help", icon: HelpCircle, name: "Help" },
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

export default dashboardLinks;
