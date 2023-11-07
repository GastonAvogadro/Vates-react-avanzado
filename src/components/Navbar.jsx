import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-center p-6">
      <nav>
        <ul className="flex gap-10 justify-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias/remeras"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Remeras
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias/pantalones"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Pantalones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias/gorras"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Gorras
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
