import React from "react";
import { ColorThemeContext } from "../customHooks/ColorThemeContext.js";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
import NavBarOption from "./NavBarOption";

export default function NavBar() {
  const colorTheme = React.useContext(ColorThemeContext);

  //   return (
  //     <div style={container(colorTheme)}>
  //       {/* <div style={twitterImage}>Twitter Image</div> */}
  //       <TwitterIcon></TwitterIcon>
  //       <div style={elementContainer}>
  //         <HomeIcon />
  //         <div style={text}>Home</div>
  //       </div>
  //       <div style={elementContainer}>
  //         <HomeIcon />
  //         <div style={text}>Explore</div>
  //       </div>
  //       <div style={text}>Notifications</div>
  //       <div style={text}>Messages</div>
  //       <div style={text}>Bookmarks</div>
  //       <div style={text}>Lists</div>
  //       <div style={text}>Profile</div>
  //       <div style={text}>More</div>
  //       <button style={tweetButton}>Tweet</button>
  //       <Button color="primary">text</Button>
  //       <div style={accountInfo}>Account</div>
  //     </div>
  //   );

  return (
    <div style={container(colorTheme)}>
      <NavBarOption Icon={HomeIcon} text={"Home"}></NavBarOption>
      <NavBarOption Icon={HomeIcon} text={"Explore"}></NavBarOption>
      <NavBarOption Icon={HomeIcon} text={"Notifications"}></NavBarOption>
      <NavBarOption Icon={HomeIcon} text={"Messages"}></NavBarOption>
      <NavBarOption Icon={HomeIcon} text={"Bookmarks"}></NavBarOption>
      <NavBarOption Icon={HomeIcon} text={"Lists"}></NavBarOption>
      <NavBarOption Icon={HomeIcon} text={"Profile"}></NavBarOption>
      <NavBarOption Icon={HomeIcon} text={"More"}></NavBarOption>
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
