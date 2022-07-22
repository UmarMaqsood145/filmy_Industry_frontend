import React from "react";
import "./AboutUs.css";
import Poster1 from "../../assets/kgf.webp";
import rrr from "../../assets/rrr.webp";
import Poster2 from "../../assets/poster1.jpg";
import { NavLink } from "react-router-dom";

function AboutUs() {
  return (
    <div id="aboutUs">
      <div className="aboutContent">
        <div className="poster1">
          <img src={Poster1} alt="Poster" />
        </div>
        <div className="content">
          Welcome to <span>Filmy Industry</span>, your number one source for all
          Movies. We're dedicated to giving you the best latest movies. Founded
          in 2022 by <span>Filmy Industry</span>, <span>Filmy Industry</span>{" "}
          has come a long way from its beginnings in starting. When{" "}
          <span>Filmy Industry</span> first started out, his passion for
          provideing Movies. So that <span>Filmy Industry</span> can offer you
          all type of movies. We now serve provide movies all over the world,
          and are thrilled that we're able to turn our passion into our own
          website. we hope you enjoy movies as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us. <br /> Sincerely, <br />
          <span>Filmy Industry</span>
          <br />
          <NavLink to="/">filmyindustry.com</NavLink> is one of the best movies
          provider websites. You can download your favorite movies from{" "}
          <NavLink to="/">filmyindustry.com</NavLink>. Also, you can download
          all categories of movies (Bollywood Movies,South Indian Movies,
          Hollywood Movies, Punjabi Movies). All HD movies are available at{" "}
          <NavLink to="/">filmyindustry.com</NavLink>.
        </div>
      </div>
      <div className="poster2">
        <img src={Poster2} alt="Poster" />
      </div>


      <div className="aboutContent">
        <div className="content">
          Welcome to <span>Filmy Industry</span>, your number one source for all
          Movies. We're dedicated to giving you the best latest movies. Founded
          in 2022 by <span>Filmy Industry</span>, <span>Filmy Industry</span>{" "}
          has come a long way from its beginnings in starting. When{" "}
          <span>Filmy Industry</span> first started out, his passion for
          provideing Movies. So that <span>Filmy Industry</span> can offer you
          all type of movies. We now serve provide movies all over the world,
          and are thrilled that we're able to turn our passion into our own
          website. we hope you enjoy movies as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us. <br /> Sincerely, <br />
          <span>Filmy Industry</span>
          <br />
          <NavLink to="/">filmyindustry.com</NavLink> is one of the best movies
          provider websites. You can download your favorite movies from{" "}
          <NavLink to="/">filmyindustry.com</NavLink>. Also, you can download
          all categories of movies (Bollywood Movies,South Indian Movies,
          Hollywood Movies, Punjabi Movies). All HD movies are available at{" "}
          <NavLink to="/">filmyindustry.com</NavLink>.
        </div>
        <div className="poster1">
          <img src={rrr} alt="Poster" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
