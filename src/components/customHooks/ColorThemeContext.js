import React, { createContext, useState } from "react";

// Hooks tutorial: https://www.youtube.com/watch?v=5LrDIWkK_Bc

// When these are "called", they reference the <> tags below.
export const ColorThemeContext = createContext();
export const SetColorThemeContext = createContext();

// In App.js, this function is called with <ThemeProvider>
export function ColorThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState({
    color: "red",
  });

  function handleSetColorTheme() {
    setColorTheme({ color: "green" });
  }

  return (
    <ColorThemeContext.Provider value={colorTheme}>
      <SetColorThemeContext.Provider value={handleSetColorTheme}>
        {children}
      </SetColorThemeContext.Provider>
    </ColorThemeContext.Provider>
  );
}
