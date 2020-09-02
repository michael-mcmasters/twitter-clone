import React, { useEffect } from "react";
import Tweet from "./components/tweet/Tweet";
import { MainText } from "./components/constants/Colors.js";
import { ThemeProvider } from "./components/customHooks/ThemeContext.js";

// as of now, this class is not using App.css
//import "./App.css";

// To visualize CSS in browser, in Chrome inspector go to arrow, components, and hover mouse over classes and their properties
export default function App() {
  useEffect(() => {
    //MainText = "green";
  }, []);
  return (
    <div style={tweetContainterCenterWidth}>
      <div>
        <ThemeProvider>
          <Tweet style={upAndDown}></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
        </ThemeProvider>
      </div>
    </div>
  );
}

// Div using this container centers tweets on screen.
// A second div is then used to make objects appear on top of one another.
const tweetContainterCenterWidth = {
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
