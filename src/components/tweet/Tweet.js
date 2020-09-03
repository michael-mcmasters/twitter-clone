import React, { useContext } from "react";
import { ColorThemeContext } from "../customHooks/ColorThemeContext.js";
// each ../ goes up one directory
import noAvatarEgg from "../../noAvatarEgg.jpg";

// export default function Tweet(props) {
//   const colorTheme = useContext(ColorThemeContext);

//   return (
//     <div style={container(colorTheme)}>
//       <img src={noAvatarEgg} alt="my description" />
//       <div style={topOfTweetContainer}>
//         <div style={name(colorTheme)}>{props.name}</div>
//         <div style={screenName(colorTheme)}>{props.userName}</div>
//         <div style={screenName(colorTheme)}>·</div>
//         <div style={screenName(colorTheme)}>{props.timeSincePost}</div>
//       </div>
//       <div style={body(colorTheme)}>hey yeah it's ya boi you already know</div>
//     </div>
//   );
// }

// function container(colorTheme) {
//   return {
//     borderLeft: "3px solid #38444d",
//     borderTop: "3px solid #38444d",
//     borderRight: "3px solid #38444d",
//     backgroundColor: colorTheme.background,
//     height: "200px",
//   };
// }

// // the top row of a tweet (name, username, how old tweet is)
// const topOfTweetContainer = {
//   // How wide row is
//   width: "500px",
//   // makes grid from left to right
//   display: "flex",
//   // space between text from edge of screen
//   margin: "10px",
// };

// function name(colorTheme) {
//   return {
//     paddingLeft: "10px",
//     color: colorTheme.textPrime,
//     fontWeight: "bold",
//   };
// }

// function screenName(colorTheme) {
//   return {
//     // space between word on left (last word doesn't need it bc there is no word to its right)
//     paddingLeft: "10px",
//     color: colorTheme.textSec,
//   };
// }

// function body(colorTheme) {
//   return { color: colorTheme.textPrime, paddingLeft: "10px", margin: "10px" };
// }

export default function Tweet(props) {
  const colorTheme = useContext(ColorThemeContext);

  // return (
  //   <div style={container(colorTheme)}>
  //     <img src={noAvatarEgg} alt="my description" />
  //     <div style={topOfTweetContainer}>
  //       <div style={name(colorTheme)}>{props.name}</div>
  //       <div style={screenName(colorTheme)}>{props.userName}</div>
  //       <div style={screenName(colorTheme)}>·</div>
  //       <div style={screenName(colorTheme)}>{props.timeSincePost}</div>
  //     </div>
  //     <div style={body(colorTheme)}>hey yeah it's ya boi you already know</div>
  //   </div>
  // );

  return (
    <div style={tweetContainer(colorTheme)}>
      {/* Left Row */}
      <span style={avatarContainer}>
        <img style={avatar} src={noAvatarEgg} alt="my description" />
      </span>
      {/* Center and Right Row */}
      <span style={topContainer(colorTheme)}>
        <span style={primaryText(colorTheme)}>{props.name}</span>
        <span style={secondaryText(colorTheme)}>{props.userName}</span>
        <span style={secondaryText(colorTheme)}>·</span>
        <span style={secondaryText(colorTheme)}>{props.timeSincePost}</span>
      </span>
    </div>
  );
}

// forces row to go from left to right instead of up and down
function tweetContainer(colorTheme) {
  return {
    display: "flex",
    height: "200px",
    width: "450px",
    backgroundColor: colorTheme.background,
    borderLeft: "3px solid #38444d",
    borderTop: "3px solid #38444d",
    borderRight: "3px solid #38444d",
  };
}

// How wide the left side of the tweet is where image will be
const avatarContainer = {
  display: "flex",
  flexDirection: "column",
  width: "75px",
  border: "3px solid blue",
};

// Size of picture
const avatar = {
  alignSelf: "flex-end",
  height: "25%",
  width: "50%",
  margin: "13px",
  marginRight: "14px",
  //border: "3px solid red",
};

// top of tweet (name, username, etc)
function topContainer(colorTheme) {
  return {
    marginTop: "10px",
    color: colorTheme.textPrime,
  };
}

function primaryText(colorTheme) {
  return {
    fontWeight: "bold",
    color: colorTheme.textPrime,
  };
}

function secondaryText(colorTheme) {
  return {
    paddingLeft: "10px",
    color: colorTheme.textSec,
  };
}
