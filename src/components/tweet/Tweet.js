import React, { useContext } from "react";
import { ColorThemeContext } from "../customHooks/ColorThemeContext.js";
// each ../ goes up one directory

export default function Tweet(props) {
  const colorTheme = useContext(ColorThemeContext);

  return (
    <div style={postBackground(colorTheme)}>
      <div style={container(colorTheme)}>
        {/* Left Row */}
        <div style={avatarContainer}>
          <img style={avatar} src={props.avatar} alt="my description" />
        </div>
        {/* Center and Right Row */}
        <span style={topContainer(colorTheme)}>
          <span style={primaryText(colorTheme)}>{props.name}</span>
          <span style={secondaryText(colorTheme)}>@{props.userName}</span>
          <span style={secondaryText(colorTheme)}>·</span>
          <span style={secondaryText(colorTheme)}>{props.timeSincePost}</span>
          <div style={body()}>
            Seminole Heights has a new colorful crosswalk outside Broward
            Elementary as part of our Crosswalks to Classrooms initiative. Learn
            how this street mural is designed to inspire kids on their way to
            school while supporting
          </div>
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
    padding: "15px",
  };
}

// Need to use this container so that margin affects the entire column.
// If we only put the margin in the image selector, it would only apply to
// the image's size, and the text would push back the margin if it were long enough to go below that column.
const avatarContainer = {
  marginRight: "10px",
};

// Size of picture
const avatar = {
  position: "relative",
  overflow: "hidden",
  width: "49px",
  height: "49px",

  // turns square image into circle (only works if iamge has same width and height)
  borderRadius: "50%",
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

function body(colorTheme) {
  return {
    //whiteSpace: "initial",
    //wordWrap: "break-word",
    //display: "table",
    display: "inline-block",
  };
}
