import React, { useContext } from "react";
import {
  ColorThemeContext,
  SetColorThemeContext,
} from "../customHooks/ColorThemeContext.js";

export default function Tweet() {
  const colorTheme = useContext(ColorThemeContext);

  return (
    <div style={container(colorTheme)}>
      <div style={topOfTweetContainer}>
        <div style={name(colorTheme)}>Stephy Garcia</div>
        <div style={screenName(colorTheme)}>@StephyG</div>
        <div style={screenName(colorTheme)}>·</div>
        <div style={screenName(colorTheme)}>16h</div>
      </div>
      <div style={body(colorTheme)}>hey yeah it's ya boi you already know</div>
    </div>
  );
}

function container(colorTheme) {
  return {
    borderLeft: "3px solid #38444d",
    borderTop: "3px solid #38444d",
    borderRight: "3px solid #38444d",
    backgroundColor: colorTheme.background,
    height: "200px",
  };
}

// the top row of a tweet (name, username, how old tweet is)
const topOfTweetContainer = {
  // How wide row is
  width: "300px",
  // makes grid from left to right
  display: "flex",
  // space between text from edge of screen
  margin: "10px",
};

function name(colorTheme) {
  return {
    paddingLeft: "10px",
    color: colorTheme.textPrime,
    fontWeight: "bold",
  };
}

function screenName(colorTheme) {
  return {
    // space between word on left (last word doesn't need it bc there is no word to its right)
    paddingLeft: "10px",
    color: colorTheme.textSec,
  };
}

function body(colorTheme) {
  return { color: colorTheme.textPrime, paddingLeft: "10px", margin: "10px" };
}
