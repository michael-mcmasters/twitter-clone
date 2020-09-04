import React, { useContext } from "react";
import { ColorThemeContext } from "../customHooks/ColorThemeContext.js";
// each ../ goes up one directory
import noAvatarEgg from "../../noAvatarEgg.jpg";

export default function Tweet(props) {
  const colorTheme = useContext(ColorThemeContext);

  return (
    <div style={postBackground(colorTheme)}>
      <div style={container(colorTheme)}>
        {/* Left Row */}
        <img style={avatar} src={noAvatarEgg} alt="my description" />
        {/* Center and Right Row */}
        <span style={topContainer(colorTheme)}>
          <span style={primaryText(colorTheme)}>{props.name}</span>
          <span style={secondaryText(colorTheme)}>@{props.userName}</span>
          <span style={secondaryText(colorTheme)}>·</span>
          <span style={secondaryText(colorTheme)}>{props.timeSincePost}</span>
        </span>
      </div>
    </div>
  );
}

// Background and borders
function postBackground(colorTheme) {
  return {
    height: "200px",
    width: "450px",
    borderLeft: "3px solid #38444d",
    borderTop: "3px solid #38444d",
    borderRight: "3px solid #38444d",
    backgroundColor: colorTheme.background,
  };
}

// Puts margin from actual post away from border of background
// Creates row from left to right for each object
function container(colorTheme) {
  return {
    display: "flex",
    margin: "10px",
  };
}

// Size of picture
const avatar = {
  marginRight: "10px",
  position: "relative",
  overflow: "hidden",
  width: "50px",
  height: "50px",
};

// top of tweet (name, username, etc)
function topContainer(colorTheme) {
  return {
    color: colorTheme.textPrime,
  };
}

function primaryText(colorTheme) {
  return {
    fontWeight: "bold",
    color: colorTheme.textPrime,
  };
}

function secondaryText(colorTheme) {
  return {
    paddingLeft: "10px",
    color: colorTheme.textSec,
  };
}
