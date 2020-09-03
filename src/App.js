import React, { useEffect, useContext } from "react";
import Tweet from "./components/tweet/Tweet";
import NavBar from "./components/navBar/NavBar";
import ColorThemeToggle from "./components/ColorThemeToggle";
import { ColorThemeProvider } from "./components/customHooks/ColorThemeContext.js";
// as of now, this class is not using App.css
//import "./App.css";

// To visualize CSS in browser, in Chrome inspector go to arrow, components, and hover mouse over classes and their properties
// first <div style> puts tweets category in row. second <div> puts individual tweets in a column
// export default function App() {
//   return (
//     <React.Fragment>
//       <div style={{ border: "3px solid #38444d" }}>
//         <NavBar></NavBar>
//       </div>
//       <div style={tweetsContainer}>
//         <ColorThemeProvider>
//           <ColorThemeToggle></ColorThemeToggle>
//           <div>
//             <Tweet style={upAndDown}></Tweet>
//             <Tweet></Tweet>
//             <Tweet></Tweet>
//             <Tweet></Tweet>
//           </div>
//         </ColorThemeProvider>
//       </div>
//     </React.Fragment>
//   );
// }

// // Div using this container centers tweets on screen.
// // A second div is then used to make objects appear on top of one another.
// const tweetsContainer = {
//   // makes row left to right
//   display: "flex",
//   // centers items on row
//   justifyContent: "center",
// };

// const upAndDown = {
//   backgroundColor: "blue",
//   border: "3px blue",
//   minHeight: "200px",
// };

export default function App() {
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
            <Tweet></Tweet>
            <Tweet></Tweet>
            <Tweet></Tweet>
            <Tweet></Tweet>
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
  display: "flex",
  justifyContent: "center",
};

const tweetContainer = {};
