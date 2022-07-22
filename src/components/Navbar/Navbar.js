import React from "react";
import "./Navbar.css";
import logo from "../../assets/filmylogo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="logo">
        <img src={logo} alt="Filmy Industry" />
        <h1 className="mb-0">Filmy Industry</h1>
      </NavLink>
      <div className="navItems">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
