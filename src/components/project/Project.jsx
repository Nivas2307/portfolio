import React, { useState } from 'react';
import './project.css';

const Project = ({ image, title, description, link }) => {
  const [show, setShow] = useState(false);

  return (
    <a
      href={link}
      className="project-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="project"
        onMouseEnter={() => setShow(true)} 
        onMouseLeave={() => setShow(false)} 
      >
        {show ? (
          <div className="project-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ) : (
          <img src={image} alt={title} className="project-image" />
        )}
      </div>
    </a>
  );
};

export default Project;
