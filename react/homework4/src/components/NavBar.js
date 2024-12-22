import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav id="nav">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/about">О нас</NavLink>
    </nav>
  );
}

export default NavBar;
