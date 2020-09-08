import React from "react";
import { ColorThemeContext } from "../customHooks/ColorThemeContext.js";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";

export default function NavBar() {
  const colorTheme = React.useContext(ColorThemeContext);

  return (
    <div style={container(colorTheme)}>
      {/* <div style={twitterImage}>Twitter Image</div> */}
      <TwitterIcon></TwitterIcon>
      <HomeIcon />
      <div style={text}>Home</div>
      <div style={text}>Explore</div>
      <div style={text}>Notifications</div>
      <div style={text}>Messages</div>
      <div style={text}>Bookmarks</div>
      <div style={text}>Lists</div>
      <div style={text}>Profile</div>
      <div style={text}>More</div>
      <button style={tweetButton}>Tweet</button>
      <Button color="primary">text</Button>
      <div style={accountInfo}>Account</div>
    </div>
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

const tweetButton = {
  width: "200px",
};

// the width of this determines how wide navbar is.
// this can probably be its own component.
const accountInfo = {
  paddingTop: "20px",
  width: "255",
};
