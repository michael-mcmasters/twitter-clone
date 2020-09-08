import React, { useContext } from "react";
import { SetColorThemeContext } from "./customHooks/ColorThemeContext.js";

// This is actually a button for now. But may change to a toggle in the future hence its name.
export default function ColorThemeToggle() {
  return (
    <button style={button} onClick={useContext(SetColorThemeContext)}>
      Color Theme
    </button>
  );
}

const button = {
  marginRight: "100px",
  height: "50px",
  width: "50px",
};
