import React from "react";
import Tweet from "./components/tweet/Tweet";
// as of now, this class is not using App.css
//import "./App.css";

// To visualize CSS in browser, in Chrome inspector go to arrow, components, and hover mouse over classes and their properties
export default function App() {
  return (
    <div style={tweetContainterCenterWidth}>
      <div>
        <Tweet style={upAndDown}></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
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
