import React, { useContext } from "react";
import { SetColorThemeContext } from "./customHooks/ColorThemeContext.js";

// This is actually a button for now. But may change to a toggle in the future hence its name.
export default function ColorThemeToggle() {
  return (
    <button onClick={useContext(SetColorThemeContext)}>
      Color Theme Toggle
    </button>
  );
}
