import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "./skill.css";
import skillimage from "../../assets/Man_Web_Developer3.webp";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import SkillQuotes from "../skill quotes/SkillQuotes";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  useEffect(() => {
    // Animation for skillcontainer_image
    gsap.fromTo(
      ".skillcontainer_image img",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skillcontainer_image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for skillcontainer_text
    gsap.fromTo(
      ".skillcontainer_text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skillcontainer_text",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for individual skill sets
    gsap.fromTo(
      ".skilcontainer_skillset",
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skillcontainer_text",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Element id="skill" className="skill_outer">
      <div className="skill_head">
        <h1>My Tech-Stack</h1>
        <div className="skillQoutes">
          <SkillQuotes />
        </div>
      </div>
      <div className="skill_both">
        <div className="skillcontainer_text">
          <div className="skilcontainer_skillset">
            <FaHtml5 />
            <h5>HTML</h5>
          </div>
          <div className="skilcontainer_skillset">
            <FaCss3Alt />
            <h5>CSS</h5>
          </div>
          <div className="skilcontainer_skillset">
            <IoLogoJavascript />
            <h5>JavaScript</h5>
          </div>
          <div className="skilcontainer_skillset">
            <FaReact />
            <h5>React JS</h5>
          </div>
          <div className="skilcontainer_skillset">
            <FaNodeJs />
            <h5>Node JS</h5>
          </div>
          <div className="skilcontainer_skillset">
            <DiMongodb />
            <h5>Mongo DB</h5>
          </div>
          <div className="skilcontainer_skillset">
            <RiTailwindCssFill />
            <h5>TailWind CSS</h5>
          </div>
          <div className="skilcontainer_skillset">
            <IoMdStar />
            <h5>Material UI</h5>
          </div>
          <div className="skilcontainer_skillset">
            <FaGithub />
            <h5>GitHub</h5>
          </div>
          <div className="skilcontainer_skillset">
            <MdApi />
            <h5>Rest API</h5>
          </div>
          <div className="skilcontainer_skillset">
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div className="skilcontainer_skillset">
            <FaFigma/>
            <h5>Figma</h5>
          </div>
        </div>
        <div className="skillcontainer_image">
          <img src={skillimage} alt="Skill" />
        </div>
      </div>
    </Element>
  );
};

export default Skill;
