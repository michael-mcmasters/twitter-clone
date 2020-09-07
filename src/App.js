import React from "react";
import Program from "./components/Program";
import { ColorThemeProvider } from "./components/customHooks/ColorThemeContext.js";

// Program.js is a child component of App.js and holds all other child components.
// App.js holds global contexts that program.js needs such as the background color.
export default function App() {
  return (
    <ColorThemeProvider>
      <Program></Program>
    </ColorThemeProvider>
  );
}
