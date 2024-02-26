import { DefaultConfig } from "@/types";

export const defaultConfig: DefaultConfig = {
  mainNav: [
    {
      title: "Help",
      href: "/help",
    },
    {
      title: "Contact",
      href: "/contact",
      // disabled: true,
    },
    // {
    //   title: "Documentation",
    //   href: "/docs",
    //   disabled: true,
    // },
  ],
};

export const minReservationRate = 0.1;

export const defaultLoginRedirect = "/dashboard/host";

export const defaultLocation = { latitude: 39.0, longitude: 34.0 };
