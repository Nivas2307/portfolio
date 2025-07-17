import React, { useEffect } from "react";
import "./footer.css";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import lo from "../../assets/lg.png";
import { gsap } from "gsap";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot_three">
        <img src={lo} alt="" />

        <div className="welcome">
          <p>Powered by coffee and endless creativity.</p>
        </div>
      </div>
      <div className="foot_two">
        <h2>Quick Links</h2>

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
          {/* <h4>Experiance</h4> */}
        </Link>
        <p>Crafted with passion, powered by creativity.</p>
      </div>
      <div className="foot_one">
        <p>Simple. Elegant. Meaningful.</p>
        <p>From dreams to reality, one project at a time.</p>
        <div className="foot_icon">
          <div className="foot_bor">
            <a
              href="mailto:nivasinfy07@gmail.com"
              target="_blank"
              style={{ color: "grey", textDecoration: "none" }}
            >
              <IoIosMail className="i" />
            </a>

            <a
              href="https://github.com/Nivas2307"
              target="_blank"
              style={{ color: "#181717", textDecoration: "none" }}
            >
              <FaGithub className="i" />
            </a>

            <a
              href="https://www.linkedin.com/in/nivas-pandiyan"
              target="_blank"
              style={{ color: "#0A66C2", textDecoration: "none" }}
            >
              <CiLinkedin className="i" />
            </a>

            <a
              href="https://www.instagram.com/_born_for_voyage_/"
              target="_blank"
              style={{ color: "#E1306C", textDecoration: "none" }}
            >
              <FaInstagram className="i" />
            </a>
            <div></div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>
          CopyRight :<span className="c">&copy;</span>{" "}
          {new Date().getFullYear()} Nivas Pandiyan. All rights reserved.{" "}
          <span>Built with Nivas</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
