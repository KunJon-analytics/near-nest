import {
  LucideIcon,
  Home,
  Landmark,
  HelpCircle,
  Route,
  BookUser,
  ArrowLeftRight,
} from "lucide-react";

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

export default dashboardLinks;
