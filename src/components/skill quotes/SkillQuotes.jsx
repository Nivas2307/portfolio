import React from 'react';
import Marquee from "react-fast-marquee";  // Ensure package is installed
import "./skillquotes.css";

const SkillQuotes = () => {

  return (
    <div className="skill-quotes-container">
      {/* Marquee component that scrolls text */}
      <Marquee
        direction="left"
        speed={20}  // Adjust speed for slower scrolling
        gradient={true}  
        loop={0}  
        pauseOnHover={false} 
      >
        <div className="quotes">
          <h5>Always Evolving My Tech Stack...</h5>
          <h5>The tech world keeps changing, so I keep learning...</h5>
          <h5>Every skill you learn in tech makes you stronger and smarter...</h5>
          <h5>Don’t be afraid to try. Every click and every line of code teaches you something new...</h5>
        </div>
      </Marquee>
    </div>
  );
};

export default SkillQuotes;
