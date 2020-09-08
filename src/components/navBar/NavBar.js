import React from "react";
import { ColorThemeContext } from "../customHooks/ColorThemeContext.js";

export default function NavBar() {
  const colorTheme = React.useContext(ColorThemeContext);

  return (
    <React.Fragment>
      <div style={container(colorTheme)}>
        <div style={twitterImage}>Twitter Image</div>
        <div style={text}>Home</div>
        <div style={text}>Explore</div>
        <div style={text}>Notifications</div>
        <div style={text}>Messages</div>
        <div style={text}>Bookmarks</div>
        <div style={text}>Lists</div>
        <div style={text}>Profile</div>
        <div style={text}>More</div>
      </div>
    </React.Fragment>
  );
}

function container(colorTheme) {
  return {
    marginTop: "10px",
    marginRight: "20px",
    color: colorTheme.textPrime,
    fontWeight: "bold",
    fontSize: "19px",
  };
}

const twitterImage = {
  padding: "10px",
};

const text = {
  weight: "bold",
  padding: "10px",
};
