import React from "react";
import { COLORS, MainText } from "../constants/Colors.js";
import { useTheme, useThemeUpdate } from "../customHooks/ThemeContext.js";

// By making them both lists <li>, instead of items <ul> in a list, they go from left to right
export default function Tweet() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    color: darkTheme ? "blue" : "red",
  };

  console.log(darkTheme);

  return (
    <div style={container}>
      <div style={headContainer}>
        <div style={name}>Peter Parker</div>
        <div style={screenName}>@peterparker89</div>
        <div style={screenName}>·</div>
        <div style={screenName}>16h</div>
      </div>
      <div style={body(themeStyles)}>hi</div>
    </div>
  );
}

const container = {
  border: "3px solid #38444d",
  backgroundColor: "#15202b",
  height: "200px",
};

// the top row of a tweet (name, username, how old tweet is)
const headContainer = {
  // How wide row is
  width: "300px",
  // makes grid from left to right
  display: "flex",
  // space between text from edge of screen
  margin: "10px",
};

const name = {
  paddingLeft: "10px",
  color: "#d8dadc",
  fontWeight: "bold",
};

const screenName = {
  // space between word on left (last word doesn't need it bc there is no word to its right)
  paddingLeft: "10px",
  color: "#72828f",
};

function body(themeStyles) {
  return { color: themeStyles.color };
}

// // Would need to pass in theme as a parameter
// const body = {
//   color: themeStyles.color,
// };

// const body = {
//   //color: COLORS.secondaryTextDark,
//   color: MainText,
//   height: "50px",
//   width: "100px",
// };

// // If possible, just pass a darkTheme object with the color properties. Instead of this bool.
// function setName(darkTheme) {
//   return darkTheme === true ? Color.MainText : Color.MainText;
// }
