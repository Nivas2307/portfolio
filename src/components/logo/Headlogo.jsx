import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./logo.css";

const Headlogo = () => {
  useEffect(() => {
    // Animate each part of the logo text
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        ".bracket",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        }
      )
      .fromTo(
        ".develop",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3" // Overlap timing with previous animation
      )
      .fromTo(
        ".highlight",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3"
      );

    // Rotate and bounce the logo container
    gsap.fromTo(
      ".lgo",
      { opacity: 0, rotate: -20, y: -20 },
      { opacity: 1, rotate: 0, y: 0, duration: 1, ease: "bounce.out" }
    );
  }, []);

  return (
    <div className="lgo">
      <h2>
        <span className="bracket">{"<"}</span>
        <span className="develop">Develop</span>
        <span className="highlight">Er</span>
        <span className="bracket">{"/>"}</span>
      </h2>
    </div>
  );
};

export default Headlogo;
