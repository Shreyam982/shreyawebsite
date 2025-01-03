"use client";

import { useTheme } from "next-themes";
import { Toggle } from "./ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      aria-label="Toggle theme"
      onPressedChange={toggleTheme}
      className="border-2"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Toggle>
  );
};

export default ThemeSwitch;
