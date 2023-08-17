import "./ThemeSelector.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";
const themeColors = ["warning", "danger", "primary", "success"];

function ThemeSelector() {
  const { changeColor, mode, changeMode } = useContext(ThemeContext);
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  // console.log(mode)

  return (
    <div className="container theme-selector">
      <div className="mode-toggle">
        <img
          src={mode === "dark" ? darkIcon : lightIcon}
          alt="dark light mode"
          onClick={toggleMode}
        />
      </div>
      <div className="theme-links">
        {themeColors.map((color, index) => (
          <span
            key={index}
            className={`bg-${color}`}
            onClick={() => changeColor(color)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
