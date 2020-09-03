import React, { useEffect } from "react";
import Tweet from "./components/tweet/Tweet";
import { ColorThemeProvider } from "./components/customHooks/ColorThemeContext.js";

// as of now, this class is not using App.css
//import "./App.css";

// To visualize CSS in browser, in Chrome inspector go to arrow, components, and hover mouse over classes and their properties
// first <div style> puts tweets category in row. second <div> puts individual tweets in a column
export default function App() {
  return (
    <div style={tweetsContainer}>
      <button>MyButton</button>
      <div>
        <ColorThemeProvider>
          <Tweet style={upAndDown}></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
        </ColorThemeProvider>
      </div>
      <button>AnotherButton</button>
    </div>
  );
}

// Div using this container centers tweets on screen.
// A second div is then used to make objects appear on top of one another.
const tweetsContainer = {
  // makes row left to right
  display: "flex",
  // centers items on row
  justifyContent: "center",
};

const upAndDown = {
  backgroundColor: "blue",
  border: "3px blue",
  minHeight: "200px",
};
