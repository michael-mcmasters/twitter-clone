import React from "react";
//import "./App.css";
import Tweets from "./tweets/Tweets";
import ColorThemeToggle from "./ColorThemeToggle";
import NavBar from "./navBar/NavBar";
import { ColorThemeContext } from "./customHooks/ColorThemeContext";

// ToDo: You can use position: fixed for the sides and they will stay in position no matter what.
// So that when we scroll, the left navbar and the right side won't scroll. Only the tweets will.
export default function Program() {
  const colorTheme = React.useContext(ColorThemeContext);

  return (
    <div style={background(colorTheme)}>
      <div style={row}>
        <ColorThemeToggle></ColorThemeToggle>
        <NavBar></NavBar>
        {/* this div makes everything go up and down */}
        <div>
          <Tweets></Tweets>
        </div>
        <div>Third</div>
        <div>Fourth</div>
      </div>
    </div>
  );
}

function background(colorTheme) {
  return {
    //height: "1000px",
    //backgroundSize: "length",
    backgroundColor: colorTheme.background,
  };
}

const row = {
  // forces row to go left to right instead of up and down
  display: "flex",
  // centers items on row
  justifyContent: "center",
};
