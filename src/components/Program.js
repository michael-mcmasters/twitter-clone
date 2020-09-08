import React from "react";
//import "./App.css";
import Tweets from "./tweets/Tweets";
import ColorThemeToggle from "./ColorThemeToggle";
import NavBar from "./navBar/NavBar";
import { ColorThemeContext } from "./customHooks/ColorThemeContext";

export default function Program() {
  // ToDo: You can use position: fixed for the sides and they will stay in position no matter what.
  // So that when we scroll, the left navbar and the right side won't scroll. Only the tweets will.
  const colorTheme = React.useContext(ColorThemeContext);

  console.log(colorTheme);

  return (
    <React.Fragment>
      <div style={background(colorTheme)}>
        <div style={row}>
          {/* Left row */}
          <NavBar></NavBar>
          <div>First</div>
          <ColorThemeToggle></ColorThemeToggle>
          <div>Second</div>
          <div>
            {/* Center row ... Items here go in column up and down */}
            <Tweets></Tweets>
            ))
          </div>
          {/* Right row */}
          <div>Third</div>
          <div>Fourth</div>
        </div>
      </div>
    </React.Fragment>
  );
}

function background(colorTheme) {
  return {
    backgroundColor: colorTheme.background,
  };
}

const row = {
  // forces row to go left to right instead of up and down
  display: "flex",
  // centers items on row
  justifyContent: "center",
};
