import React, { useEffect } from "react";
import "./Experienece.css";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { Element } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experienace = () => {
  useEffect(() => {
    // Animate the experience container
    gsap.fromTo(
      ".experiance_container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experiance_container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the count boxes
    gsap.fromTo(
      ".count_box",
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experiance_container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the TypeAnimation paragraph
    gsap.fromTo(
      ".p",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".animation-content",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Element id="experiance" className="exp_container">
      <h1>Experience</h1>
      <div className="animation-container">
        <div className="animation-content">
          <TypeAnimation
            className="p"
            sequence={[
              '"Starting my journey"...|',
              1000,
              '" ready to learn and grow every step of the way"...|',
              1000,
              '"A beginner today"...|',
              1000,
              '" but always eager to improve and take on new challenges"...|',
              1000,
              '"Every experience, big or small...|',
              1000,
              '" adds value to my journey as a fresh start"...|',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3rem",
              display: "inline-block",
              fontWeight: "bolder",
              color: "#4C4B4B",
            }}
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="experiance_container">
        <CountUp
          start={0}
          end={5}
          duration={3}
          separator=" "
          decimals={0}
          decimal=","
          prefix=" "
          suffix="+"
        >
          {({ countUpRef }) => (
            <div className="count_box">
              <span ref={countUpRef} />
              <p>Projects</p>
            </div>
          )}
        </CountUp>
        <CountUp
          start={0}
          end={10}
          duration={3}
          separator=" "
          decimals={0}
          decimal=","
          prefix=" "
          suffix="+"
        >
          {({ countUpRef }) => (
            <div className="count_box">
              <span ref={countUpRef} />
              <p>Skills</p>
            </div>
          )}
        </CountUp>
        <CountUp
          start={0}
          end={2}
          duration={3}
          separator=" "
          decimals={0}
          decimal=","
          prefix=" "
          suffix="+"
        >
          {({ countUpRef }) => (
            <div className="count_box">
              <span ref={countUpRef} />
              <p>Languages</p>
            </div>
          )}
        </CountUp>
        <CountUp
          start={1}
          end={10}
          duration={3}
          separator=" "
          decimals={0}
          decimal=","
          prefix=" "
          suffix=" +"
        >
          {({ countUpRef }) => (
            <div className="count_box">
              <span ref={countUpRef} />
              <p>Month</p>
            </div>
          )}
        </CountUp>
      </div>
    </Element>
  );
};

export default Experienace;
