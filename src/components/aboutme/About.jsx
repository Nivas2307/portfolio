import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import { Element, Link } from "react-scroll";
import PDF from "../../assets/Nivas  bio.pdf";
import Mern from "../merntittle/Mern";
import { FaDownload } from "react-icons/fa";
import { SiPolywork } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const fullName = "Nivas Pandiyan";

  useEffect(() => {
    // Animate full name
    const nameElement = document.querySelector(".name");
    nameElement.innerHTML = fullName
      .split("")
      .map((letter) => `<span>${letter}</span>`)
      .join("");

    gsap.fromTo(
      ".name span",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".name-animation",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate about_image
    gsap.fromTo(
      ".about_image",
      {
        scale: 0.3,
        opacity: 0,
        y: 200,
        rotateY: 180,
        rotateX: 20,
        filter: "blur(20px)",
        boxShadow: "0px 0px 50px rgba(255,255,255,0.5)",
      },
      {
        scale: 1.1,
        opacity: 1,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        filter: "blur(0px)",
        boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
        duration: 3,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".about_image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate about_down buttons
    gsap.fromTo(
      ".about_down button",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about_down",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Button hover animation
    document.querySelectorAll(".about_down button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.2 });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
      });
    });
  }, [fullName]);

  return (
    <Element id="about" className="about_outer">
      <div className="about_inner">
        <div className="about_box">
          <div className="about_image"></div>
          <div className="about_para">
            <h3>Hello Everyone ...</h3>
            <h1 className="name-animation">
              I am <span className="name"></span>
            </h1>
            <h5>
              <Mern />
            </h5>
            <p>
              Passionate Frontend Developer specializing in the{" "}
              <span style={{ color: "balck", fontWeight: "bold" }}>
                MERN stack
              </span>
              , with a strong focus on design and user experience.Skilled in
              building responsive,interactive,and visually engaging web
              applications. A quick learner and creative problem-solver,eager to
              contribute to dynamic teams and deliver impactful solutions in
              modern tech environments.
            </p>
            <div className="about_down">
              <a href={PDF} download={PDF}>
                <button className="about_content_cv">
                  Download CV <FaDownload />
                </button>
              </a>
              <Link to="project" smooth={true} duration={500}>
                <button className="about_content_work">
                  My Work <SiPolywork />
                </button>
              </Link>
            </div>
            <div className="social">
              <a
                href="mailto:nivasinfy07@gmail.com"
                target="_blank"
                style={{ color: "gray", textDecoration: "none" }}
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
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
