import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search-recipes">Recipes</NavLink>
    </nav>
  );
}

export default NavBar;
