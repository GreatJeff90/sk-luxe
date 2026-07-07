/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Initialize state based on whether we are already in the browser
  const [mounted, setMounted] = useState(false);

  // This is the standard pattern for Next.js hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // If you are still getting an ESLint error on the line above,
  // it is likely a strict configuration. 
  // You can safely bypass this specific line for this pattern using:
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  if (!mounted) {
    return <div className="p-2 w-9 h-9" />; // Returns a placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}