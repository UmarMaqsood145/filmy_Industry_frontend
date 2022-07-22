import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/footerfilmylogo.png";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { BsPinterest, BsFacebook } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footerBox">
        <div className="footerLogo box">
          <img src={footerLogo} alt="Filmy Industry" />
          <h1>Filmy Industry</h1>
        </div>
        <div className="footerItems box">
          <h4>Filmy Industry</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/disclaimer">Disclaimer</NavLink>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </div>
        <div className="footerItems box">
          <h4>About Us</h4>
          <div className="aboutContent">
            <NavLink to="/">filmyindustry.com</NavLink> is one of the best
            movies provider websites. You can download your favorite movies
            from&nbsp;
            <NavLink to="/">filmyindustry.com</NavLink>. Also, you can download
            all categories of movies (<span>Bollywood Movies</span>,
            <span>South Indian Movies</span>, <span>Hollywood Movies</span>,{" "}
            <span>Punjabi Movies</span>). All HD movies are available at{" "}
            <NavLink to="/">filmyindustry.com</NavLink>.
          </div>
        </div>
        <div className="inputBox box">
          <input type="email" placeholder="Enter Email to Subscribe" />
          <button>Subsribe</button>
        </div>
      </div>
      <div className="line"></div>
      <div className="d-flex flex-column align-items-center mt-3">
        <div>
          <NavLink to="#" className="icon-bg">
            <BsFacebook className="icons" />
          </NavLink>
          <NavLink to="#" className="icon-bg">
            <AiFillInstagram className="icons" />
          </NavLink>
          <NavLink to="#" className="icon-bg">
            <BsPinterest className="icons" />
          </NavLink>
          <NavLink to="#" className="icon-bg">
            <AiFillTwitterCircle className="icons" />
          </NavLink>
          <NavLink to="#" className="icon-bg">
            <AiFillYoutube className="icons" />
          </NavLink>
        </div>
        <p className="mt-3 mb-0 text-center">
          © Copyright 2022 - <NavLink to="/">filmyindustry.com</NavLink> All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
