import { Suspense } from "react";

import { defaultConfig } from "@/config/default";

import { NavBar } from "./_components/navbar";
import { SiteFooter } from "@/components/shared/layout/site-footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default async function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <NavBar items={defaultConfig.mainNav} scroll={true} />
      </Suspense>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
