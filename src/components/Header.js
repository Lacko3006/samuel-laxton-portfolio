import React from "react";
import HouseLogo from "../images/house-logo.png";
import AboutMeLogo from "../images/about-me.png";
import MobileLogo from "../images/mobile-logo.png"
import ProjectsLogo from "../images/project-logo.png"

function Header() {
  return (
    <div className="navbar">
      <h2 className="navbar-name">Sam Laxton Portfolio</h2>
      <div className="navbar-links">
        <div className="container">
          <a href="#home">
            <img className="house-img" src={HouseLogo} alt="House Logo"></img>
          </a>
        </div>
        <div className="container">
          <a href="#about">
            <img
              className="about-me-img"
              src={AboutMeLogo}
              alt="About Me Logo"
            ></img>
          </a>
        </div>
        <div className="container">
        <a href="#contact">
        <img
              className="mobile-img"
              src={MobileLogo}
              alt="mobile logo"
            ></img>
        </a>
        </div>
        <div className="container">
        <a href="#contact">
        <img
              className="project-img"
              src={ProjectsLogo}
              alt="mobile logo"
            ></img>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
