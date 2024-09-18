// ProjectCard.js

import React from 'react';
import './ProjectCard.css'; // Add CSS styles here or in the main CSS file

const ProjectCard = ({ imageSrc, title, description, techList, liveLink }) => {
  return (
    <div className="project-card">
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={title} className="project-image" />
      </a>
      <div className="project-details">
        <h2 className="project-name">{title}</h2>
        <p className="project-description">{description}</p>
        <ul className="project-tech-list">
          {techList.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
          View Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
