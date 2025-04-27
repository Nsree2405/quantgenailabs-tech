
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set initial theme based on system preference
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-10 h-10 bg-white/10 hover:bg-white/20"
      onClick={toggleTheme}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </Button>
  );
};

export default ThemeToggle;
