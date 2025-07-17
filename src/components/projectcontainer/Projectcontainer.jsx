import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./../project/Project";
import "./projectcontainer.css";
import pro1 from "../../assets/net2.jpeg";
import pro2 from "../../assets/Ecommerce2.jpg";
import pro3 from "../../assets/emp.webp";
import pro4 from "../../assets/social.webp";
import pro5 from "../../assets/we.jpeg";
import pro6 from "../../assets/xoxoxo.jpeg";

gsap.registerPlugin(ScrollTrigger);

function Projectcontainer() {
  useEffect(() => {
    // Animation for the heading
    gsap.fromTo(
      ".projectcontainer h2",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projectcontainer h2",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for paragraph
    gsap.fromTo(
      ".project_outline p",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project_outline p",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for project cards
    gsap.fromTo(
      ".project",
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projectcontainer-projects",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for images inside project cards
    gsap.fromTo(
      ".project img",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projectcontainer-projects",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  let projects = [
    {
      image: pro1,
      title: "Netflix Clone",
      description: "A Netflix clone built with HTML, CSS, JAVASCRIPT.",
      link: "https://netflix-clone.example.com",
    },
    {
      image: pro2,
      title: "E-Commerce Website Clone",
      description: "This Website clone built with React JS.",
      link: "https://portfolio.example.com",
    },
    {
      image: pro3,
      title: "Emp-Management Clone",
      description:
        "This website clone built with React, Tailwind CSS, MongoDB, and Express JS.",
      link: "https://portfolio.example.com",
    },
    {
      image: pro4,
      title: "My Portfolio",
      description:
        "Developed this application with React and Tailwind CSS, with a responsive and modern UI.",
      link: "https://portfolio.example.com",
    },
    {
      image: pro5,
      title: "Weather App Clone",
      description: "Developed with React JS.",
      link: "https://portfolio-iota-sooty-64.vercel.app",
    },
    {
      image: pro6,
      title: "Class of Tic Tac Toe",
      description: "Developed using HTML, CSS, and JavaScript.",
      link: "https://gaming-beta-blue.vercel.app",
    },
  ];

  return (
    <Element id="project" className="projectcontainer">
      <div className="project_outline">
        <h2 className="heading">My Projects</h2>
        <p>Here are some projects I have done to make people's lives easier!</p>
      </div>
      <div className="projectcontainer-projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
}

export default Projectcontainer;
