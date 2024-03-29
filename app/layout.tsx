import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { ThemeProviders } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/toaster";
import { PiProvider } from "@/components/providers/pi";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

import "@/styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProviders attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProviders>
        <PiProvider />
        <Toaster />
      </body>
    </html>
  );
}
