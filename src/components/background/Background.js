import React, { useContext, Fragment } from "react";
import { ColorThemeContext } from "../customHooks/ColorThemeContext.js";

export default function Background(props) {
  const colorTheme = useContext(ColorThemeContext);

  return <div style={{ background: "red" }} id=""></div>;
  //return <div style={backgroundColor(colorTheme)}>test</div>;
  //return <Fragment></Fragment>;
}

function backgroundColor(colorTheme) {
  return {
    backgroundColor: colorTheme.background,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
}
