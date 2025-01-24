import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import { Element, Link } from "react-scroll";
import PDF from "../../assets/Nivasnew.pdf";
import Mern from "../merntittle/Mern";
import { FaDownload } from "react-icons/fa";
import { SiPolywork } from "react-icons/si";

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
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
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
            <h3>Hello Everyone 🙋🏿‍♂️...</h3>
            <h1 className="name-animation">
              I am <span className="name"></span>!
            </h1>
            <h5>
              <Mern />
            </h5>
            <p>
              I build modern, responsive web interfaces with a focus on clean
              code and seamless user experiences. As a front-end and back-end
              developer, I turn ideas into digital solutions that perform
              flawlessly. Let’s bring your vision to life!
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
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
