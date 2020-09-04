import React, { useEffect, useContext } from "react";
import Tweet from "./components/tweet/Tweet";
import NavBar from "./components/navBar/NavBar";
import ColorThemeToggle from "./components/ColorThemeToggle";
import { ColorThemeProvider } from "./components/customHooks/ColorThemeContext.js";
//import stephyAvatar from "../../stephy-avatar.jpg";
// as of now, this class is not using App.css
//import "./App.css";

export default function App() {
  const tweets = [
    {
      id: "0",
      name: "Stephy Garcia",
      userName: "StephyG",
      timeSincePost: "16h",
    },
    {
      id: "1",
      name: "Chris Beardsley",
      userName: "ChrisBFriedChicken",
      timeSincePost: "8h",
    },
    {
      id: "2",
      name: "Nathan McMasters",
      userName: "NateMcMasters",
      timeSincePost: "2h",
    },
    {
      id: "3",
      name: "Dayman McMasters",
      userName: "DaymanKnight",
      timeSincePost: "7h",
    },
  ];

  // ToDo: You can use position: fixed for the sides and they will stay in position no matter what.
  // So that when we scroll, the left navbar and the right side won't scroll. Only the tweets will.
  return (
    <React.Fragment>
      <ColorThemeProvider>
        <div style={row}>
          {/* Left row */}
          <div>First</div>
          <div>Second</div>
          <ColorThemeToggle></ColorThemeToggle>
          <div>
            {/* Center row ... Items here go in column up and down */}
            {tweets.map((tweet) => (
              <Tweet
                name={tweet.name}
                userName={tweet.userName}
                timeSincePost={tweet.timeSincePost}
              ></Tweet>
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
