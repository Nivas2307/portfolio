import React, { useEffect } from "react";
import "./footer.css";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaPrayingHands } from "react-icons/fa";
import { gsap } from "gsap"; // Import GSAP

const Footer = () => {


  return (
    <footer className="footer">
      <div className="foot_one">
        <p>Simple. Elegant. Meaningful.</p>
        <p>From dreams to reality, one project at a time.</p>
        <div className="foot_icon">
          <div className="foot_bor">
            <a
              href="mailto:nivasinfy07@gmail.com"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              <IoIosMail className="i" />
            </a>
            <a
              href="https://github.com/Nivas2307"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FaGithub className="i" />
            </a>
            <a
              href="http://www.linkedin.com/in/nivas-pandiyan"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              <CiLinkedin className="i" />
            </a>
            <a style={{ color: "white", textDecoration: "none" }}>
              <FaInstagram className="i" />
            </a>
          </div>
        </div>
      </div>
      <div className="foot_two">
        <h2>Hot Links</h2>

        <Link to="skill" smooth={true} duration={500} id="skills">
          <h4>Skills</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500} id="contact">
          <h4>Contact</h4>
        </Link>
        <Link to="service" smooth={true} duration={500} id="service">
          <h4>Service</h4>
        </Link>
        <Link to="project" smooth={true} duration={500} id="projects">
          <h4>Project</h4>
        </Link>

        <Link to="about" smooth={true} duration={500} id="about">
          <h4>About Me</h4>
        </Link>
        <Link to="experiance" smooth={true} duration={500} id="experiance">
          <h4>Experiance</h4>
        </Link>
        <p>Crafted with passion, powered by creativity.</p>
      </div>
      <div className="foot_three">
        <h2>Support</h2>
        <h4>Privacy Policy</h4>
        <h4>Cookie Policy</h4>
        <h4>Terms And Condition</h4>

        <div className="welcome">
          <FaPrayingHands />
          <p>Welcome!</p>
        </div>

        <p>Powered by coffee and endless creativity.</p>
      </div>
      <div className="footer_bottom">
        <p>
          CopyRight :<span className="c">&copy;</span> {new Date().getFullYear()} Nivas
          Pandiyan. All rights reserved.
        </p>
        <span>Built with Nivas🏃🏿‍➡️....</span>
      </div>
    </footer>
  );
};

export default Footer;
