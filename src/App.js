import React from "react";
import MainFeed from "./components/mainFeed/MainFeed";
// as of now, this class is not using App.css
//import "./App.css";

// To visualize CSS in browser, in Chrome inspector go to arrow, components, and hover mouse over classes and their properties
export default function App() {
  return (
    <div style={tweetContainterCenterWidth}>
      <div>
        <MainFeed></MainFeed>
        <MainFeed></MainFeed>
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
  height: "200px",
};
