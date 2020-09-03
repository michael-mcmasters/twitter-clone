import React, { createContext, useState } from "react";
import { Colors } from "../constants/Colors.js";

// Hooks tutorial: https://www.youtube.com/watch?v=5LrDIWkK_Bc

// When these are "called", they reference the <> tags below.
export const ColorThemeContext = createContext();
export const SetColorThemeContext = createContext();

// In App.js, this function is called with <ThemeProvider>
export function ColorThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(Colors.lightMode);

  function handleSetColorTheme() {
    if (colorTheme === Colors.lightMode) {
      setColorTheme(Colors.darkMode);
      console.log("was light mode");
    } else {
      setColorTheme(Colors.lightMode);
      console.log("was dark mode");
    }
  }

  return (
    <ColorThemeContext.Provider value={colorTheme}>
      <SetColorThemeContext.Provider value={handleSetColorTheme}>
        {children}
      </SetColorThemeContext.Provider>
    </ColorThemeContext.Provider>
  );
}
