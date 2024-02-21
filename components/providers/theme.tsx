"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Provider as BalancerProvider } from "react-wrap-balancer";

export function ThemeProviders({ children, ...props }: ThemeProviderProps) {
  return (
    
      <NextThemesProvider {...props}>
        <BalancerProvider>{children}</BalancerProvider>
      </NextThemesProvider>
  );
}
