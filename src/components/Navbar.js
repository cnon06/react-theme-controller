import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Searchbar from "./SearchBar";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const { color } = useContext(ThemeContext);
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Recipes
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/create">
              Create
            </NavLink>
          </li>
        </ul>
        <Searchbar />
      </div>
    </nav>
  );
}

export default Navbar;
