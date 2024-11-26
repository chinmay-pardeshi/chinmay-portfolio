import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, image, link, onCardClick }) => {
  return (
    <div className="project-card" onClick={onCardClick}>
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        onClick={(e) => e.stopPropagation()} // Prevents card click event
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
