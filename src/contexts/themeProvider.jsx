import React, { useEffect, useState, useMemo } from "react";
import { ThemeContext, themes } from "./themeContext";

export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState(() => {
    const persistedTheme = localStorage.getItem("currentTheme");
    return persistedTheme ? JSON.parse(persistedTheme) : themes.light;
  });

  useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(themeValue));
  }, [themeValue]);

  const toggleTheme = () => {
    setThemeValue((prev) => (prev === themes.dark ? themes.light : themes.dark));
  };

  const contextValue = useMemo(() => {
    return { theme: themeValue, toggleTheme };
  }, [themeValue]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
