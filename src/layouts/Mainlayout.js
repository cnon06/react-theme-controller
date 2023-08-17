import React, {useContext} from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ThemeSelector from "../components/ThemeSelector";
import { ThemeContext } from "../contexts/ThemeContext";
import "./Mainlayout.scss"

function Mainlayout() {
  const { mode} = useContext(ThemeContext)
  return (
    <div className={`main bg-${mode}`}>
      <Navbar />
      <ThemeSelector/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  );
}

export default Mainlayout;
