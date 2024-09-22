import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({ imageSrc, title, description, techList, liveLink, githubLink }) => {
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
        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Live
          </a>
          <br></br>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              GitHub Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
