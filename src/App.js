import React from "react";
//import "./App.css";
import Tweet from "./components/tweet/Tweet";
//import NavBar from "./components/navBar/NavBar";
import ColorThemeToggle from "./components/ColorThemeToggle";
import { ColorThemeProvider } from "./components/customHooks/ColorThemeContext.js";
import stephyAvatar from "./stephy-avatar.jpg";
import chrisAvatar from "./chris-avatar.jpg";
import nateAvatar from "./nate-avatar.jpg";
import daymanAvatar from "./dayman-avatar.jpg";

export default function App() {
  const tweets = [
    {
      id: "0",
      name: "Stephy Garcia",
      userName: "StephyG",
      avatar: stephyAvatar,
      timeSincePost: "16h",
    },
    {
      id: "1",
      name: "Chris Beardsley",
      userName: "ChrisBFriedChicken",
      avatar: chrisAvatar,
      timeSincePost: "8h",
    },
    {
      id: "2",
      name: "Nathan McMasters",
      userName: "NateMcMasters",
      avatar: nateAvatar,
      timeSincePost: "2h",
    },
    {
      id: "3",
      name: "Dayman McMasters",
      userName: "DaymanKnight",
      avatar: daymanAvatar,
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
          <ColorThemeToggle></ColorThemeToggle>
          <div>First</div>
          <div>Second</div>
          <div>
            {/* Center row ... Items here go in column up and down */}
            {tweets.map((tweet) => (
              <Tweet
                key={tweet.id}
                name={tweet.name}
                userName={tweet.userName}
                avatar={tweet.avatar}
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
