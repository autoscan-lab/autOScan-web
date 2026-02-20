"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        size="sm"
        variant="ghost"
        className="h-9 w-9 rounded-full bg-zinc-100 px-0 text-zinc-900"
      />
    );
  }

  return (
    <Button
      size="sm"
      variant="ghost"
      className="h-9 w-9 rounded-full bg-zinc-100 px-0 text-zinc-900 hover:bg-zinc-200"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon size={18} weight="bold" />
      ) : (
        <MoonIcon size={18} weight="bold" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
