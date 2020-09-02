import React from "react";
import MainFeed from "./components/mainFeed/MainFeed";
// as of now, this class is not using App.css
import "./App.css";

// To visualize CSS in browser, in Chrome inspector go to arrow, components, and hover mouse over classes and their properties
export default function App() {
  return (
    <div style={tweetContainter}>
      <MainFeed></MainFeed>
    </div>
  );
}

const tweetContainter = {
  // these two elements make tweets appear at the center of the class
  display: "flex",
  justifyContent: "center",
};
