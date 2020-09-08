import React, { setContext, useContext } from "react";
//import "./App.css";
import Tweets from "./components/tweets/Tweets";
//import NavBar from "./components/navBar/NavBar";
import ColorThemeToggle from "./components/ColorThemeToggle";
import { ColorThemeProvider } from "./components/customHooks/ColorThemeContext.js";
import Background from "./components/background/Background.js";
import { COLORS } from "./components/constants/Colors.js";

//const Theme = React.createContext(COLORS.darkmode);
//const Theme = React.createContext(COLORS.background);
//export const [Theme, SetTheme] = React.createContext(COLORS.darkMode);

// function handleSetColorTheme() {
//   if (Theme === COLORS.lightMode) {
//     setTheme(COLORS.darkMode);
//   } else {
//     setTheme(COLORS.lightMode);
//   }
// }

export const ThemeContext = React.createContext();

export default function App() {
  // ToDo: You can use position: fixed for the sides and they will stay in position no matter what.
  // So that when we scroll, the left navbar and the right side won't scroll. Only the tweets will.
  //const [colorTheme, setColorTheme] = React.useState(COLORS.darkMode);

  const [Theme, SetTheme] = React.createContext(COLORS.darkMode);

  function handleSetColorTheme() {
    if (Theme === COLORS.lightMode) {
      SetTheme(COLORS.darkMode);
    } else {
      SetTheme(COLORS.lightMode);
    }
  }

  return (
    <React.Fragment>
      <div style={background(Theme)}>
        <div style={row}>
          {/* Left row */}
          <div>First</div>
          <ColorThemeToggle set={handleSetColorTheme}></ColorThemeToggle>
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

function background(theme) {
  return {
    backgroundColor: theme.background,
  };
}

const row = {
  // forces row to go left to right instead of up and down
  display: "flex",
  // centers items on row
  justifyContent: "center",
};
