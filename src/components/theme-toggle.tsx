import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component mounts on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={toggleTheme}
      className=" w-[40px] h-[40px] rounded-full relative"
    >
      <Sun
        className={` h-[1.2rem] w-[1.2rem]
            transition-all absolute
            ${
              theme == "light" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            } `}
      />
      <Moon
        className={` h-[1.2rem] w-[1.2rem]
            absolute transition-all
            ${
              theme == "light" ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            } `}
      />
    </Button>
  );
};

export default ThemeToggle;
