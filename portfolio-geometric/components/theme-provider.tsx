"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

// Resets to "system" on every page load so the OS preference always wins
// on refresh, while manual toggles still work within the session.
function SystemThemeSync() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("system");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SystemThemeSync />
      {children}
    </NextThemesProvider>
  );
}
