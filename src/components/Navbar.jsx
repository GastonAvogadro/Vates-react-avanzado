import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <header className="flex justify-center p-6">
      <nav className="flex gap-10">
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
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
