import React, { useEffect } from "react";
import "./service.css";
import { Element } from "react-scroll";
import { BiMobileAlt } from "react-icons/bi";
import { RiCodeSSlashFill } from "react-icons/ri";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  useEffect(() => {
    // Service box animation (slide in)
    gsap.fromTo(
      ".service_box",
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".service_box_layout",
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          scrub: true,
        },
      }
    );

    // Button animation (scale-in with bounce)
    gsap.fromTo(
      ".service_bud button",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".service_box_layout",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // SVG icon animation (rotate and scale)
    gsap.fromTo(
      ".ic",
      { scale: 0.5, rotate: -90, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".service_box_layout",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Element id="service" className="service_outer">
      <div className="service_inner">
        <div className="service_head">
          <h1 className="heading">My Services</h1>
          <p>
            As a full stack developer, I create modern, responsive, and
            user-friendly websites that are both visually appealing and
            efficient, with expertise in both frontend and backend
            development...
          </p>
        </div>
        <div className="service_box_layout">
          <div className="service_box">
            <div className="service_icon">
              <div className="out_box">
                <div className="round_box">
                  <BiMobileAlt className="ic" />
                </div>
              </div>
            </div>
            <div className="service_heading">
              <h3>Responsive Web Design</h3>
            </div>
            <div className="service_para">
              <p>
                Crafting visually appealing and fully responsive websites that
                adapt seamlessly to any device, ensuring an excellent user
                experience on desktops, tablets, and smartphones.
              </p>
            </div>
            <div className="service_bud">
              <Link to="contact" smooth={true} duration={500}>
                <button type="submit">
                  Let's Talk <HiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>

          <div className="service_box">
            <div className="service_icon">
              <div className="out_box">
                <div className="round_box">
                  <RiCodeSSlashFill className="ic" />
                </div>
              </div>
            </div>
            <div className="service_heading">
              <h3>Custom Web Development</h3>
            </div>
            <div className="service_para">
              <p>
                Building dynamic, interactive web applications tailored to your
                specific needs, using modern frontend technologies to create
                scalable and maintainable solutions.
              </p>
            </div>
            <div className="service_bud">
              <Link to="contact" smooth={true} duration={500}>
                <button type="submit">
                  Let's Talk <HiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>

          <div className="service_box">
            <div className="service_icon">
              <div className="out_box">
                <div className="round_box">
                  <HiOutlineBars3 className="ic" />
                </div>
              </div>
            </div>
            <div className="service_heading">
              <h3>Backend Development</h3>
            </div>
            <div className="service_para">
              <p>
                Building robust, scalable, and secure server-side architectures,
                ensuring efficient database management, API integrations, and
                seamless communication between the frontend and backend.
              </p>
            </div>
            <div className="service_bud">
              <Link to="contact" smooth={true} duration={500}>
                <button type="submit">
                  Let's Talk <HiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Service;
