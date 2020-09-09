import React from "react";
import { ColorThemeContext } from "../customHooks/ColorThemeContext.js";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import styles from "../../styles.css";

// "Icon" has to have capital "I" to show up
export default function NavBarOption({ Icon, text }) {
  const colorTheme = React.useContext(ColorThemeContext);

  return (
    <div className="navbarOption">
      <Icon />
      <div style={font}>{text}</div>
    </div>
  );
}

const elementContainer = {
  display: "flex",

  // Make icon and text appear near same height
  alignItems: "center",

  // changes mouse to finger when hovering over element
  cursor: "pointer",
};

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

const font = {
  weight: "bold",
  padding: "10px",
};

const tweetButton = {
  width: "200px",
};

// the width of this determines how wide navbar is.
// this can probably be its own component.
const accountInfo = {
  paddingTop: "20px",
  width: "255",
};
