import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const getInitialTheme = () => {
  try {
    return localStorage.getItem("aof-theme") || "light";
  } catch {
    return "light";
  }
};

export const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("aof-theme", theme);
    } catch {}
  }, [theme]);

  return (
    <button
      data-testid="theme-toggle-btn"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      title={theme === "light" ? "Dark mode" : "Light mode"}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-bull/50 hover:text-bull ${className}`}
    >
      {theme === "light" ? <Moon className="h-[17px] w-[17px]" /> : <Sun className="h-[17px] w-[17px]" />}
    </button>
  );
};
