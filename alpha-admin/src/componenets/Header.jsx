"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import setupThemeSwitcher from "@/utils/theme-switcher";
import { useThemeStore } from "@/store/themeStore";
function Header() {
  const [themeManager, setThemeManager] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const setTheme = useEffect(() => {
    const manager = setupThemeSwitcher();
    setThemeManager(manager);
    setIsDark(manager.getIsDark());
  }, []);

  const handleToggle = () => {
    if (themeManager) {
      themeManager.toggleTheme();
      setIsDark(themeManager.getIsDark());
    }
  };
  console.log(useThemeStore((state) => state.Theme));
  
  return (
    <div>
      <header className="w-full h-10 ">
        <ul></ul>
        <ul>
          <Button onClick={handleToggle} className="text-white">{isDark?"دارک":"لایت"}</Button>
        </ul>
      </header>
    </div>
  );
}

export default Header;
