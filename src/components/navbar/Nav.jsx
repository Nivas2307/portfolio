import React, { useState } from "react";
import "./Nav.css";
import Headlogo from "../logo/Headlogo";
import { Link } from "react-scroll";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile((prev) => !prev);
  };

  const handleLinkClick = () => {
    // Close the mobile menu when a link is clicked
    setIsMobile(false);
  };

  return (
    <section className="outer">
      <div className="inner">
        <div className="logo">
          <Headlogo />
        </div>
        <div
          id="nav_items_p"
          className={`nav_items ${isMobile ? "active" : ""}`}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            <h4>About Me</h4>
          </Link>
          <Link
            to="skill"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            <h4>Skills</h4>
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            <h4>Service</h4>
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            <h4>Projects</h4>
          </Link>
          <button type="submit" onClick={handleLinkClick} id="nav_btn">
            <Link to="contact" smooth={true} duration={500}>
              <h4>Let's Connect</h4>
            </Link>
          </button>
        </div>
        <div className="hamburger" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </section>
  );
};

export default Nav;
