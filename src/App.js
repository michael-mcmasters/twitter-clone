import React from "react";
//import "./App.css";
import Tweets from "./components/tweets/Tweets";
//import NavBar from "./components/navBar/NavBar";
import ColorThemeToggle from "./components/ColorThemeToggle";
import { ColorThemeProvider } from "./components/customHooks/ColorThemeContext.js";

export default function App() {

  // ToDo: You can use position: fixed for the sides and they will stay in position no matter what.
  // So that when we scroll, the left navbar and the right side won't scroll. Only the tweets will.
  return (
    <React.Fragment>
      <ColorThemeProvider>
        <div style={row}>
          {/* Left row */}
          <div>First</div>
          <ColorThemeToggle>
          </ColorThemeToggle>
          <div>Second</div>
          <div>
            {/* Center row ... Items here go in column up and down */}
            <Tweets>
            </Tweets>
            ))}
          </div>
          {/* Right row */}
          <div>Third</div>
          <div>Fourth</div>
        </div>
      </ColorThemeProvider>
    </React.Fragment>
  );
}

const row = {
  // forces row to go left to right instead of up and down
  display: "flex",
  // centers items on row
  justifyContent: "center",
};
