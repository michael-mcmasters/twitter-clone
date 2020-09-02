import React from "react";

// By making them both lists <li>, instead of items <ul> in a list, they go from left to right
export default function MainFeed() {
  return (
    <div style={row}>
      <div style={name}>Peter Parker</div>
      <div style={name}>@peterparker89</div>
      <div style={name}>*</div>
      <div style={name}>16h</div>
    </div>
  );
}

const row = {
  // How wide row is
  width: "300px",
  // makes grid from left to right
  display: "flex",
  // space between text from edge of screen
  margin: "10px",
};

const name = {
  // space between word on left
  paddingLeft: "10px",
};
