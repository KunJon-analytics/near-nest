import { SiteConfig } from "@/types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Near Nest",
  title: "Near Nest: Book Unique Stays with Pi Network Tokens",
  description:
    "Discover cozy accommodations on Near Nest, where you can pay for your stay using Pi Network tokens. Explore a world of comfort and convenience!",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/kunjongroup",
    github: "https://github.com/KunJon-analytics",
  },
  mailSupport: "kunjonng@gmail.com",
};
