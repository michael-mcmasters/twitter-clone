import React, { createContext, useState } from "react";
import { COLORS } from "../constants/Colors.js";

// Hooks tutorial: https://www.youtube.com/watch?v=5LrDIWkK_Bc

// When these are "called", they reference the <> tags below.
export const ColorThemeContext = createContext();
export const SetColorThemeContext = createContext();

// Context is technically a functional component.
export function ColorThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(COLORS.lightMode);

  function handleSetColorTheme() {
    if (colorTheme === COLORS.lightMode) {
      setColorTheme(COLORS.darkMode);
    } else {
      setColorTheme(COLORS.lightMode);
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
