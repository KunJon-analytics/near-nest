import { DefaultConfig } from "@/types";

export const defaultConfig: DefaultConfig = {
  mainNav: [
    {
      title: "Properties",
      href: "/properties",
    },
    {
      title: "Contact",
      href: "/contact",
      disabled: true,
    },
    // {
    //   title: "Documentation",
    //   href: "/docs",
    //   disabled: true,
    // },
  ],
};

export const minReservationRate = 0.5;

export const defaultLoginRedirect = "/dashboard/host";

export const defaultLocation = { latitude: 39.0, longitude: 34.0 };

export const platformFee = 10;
