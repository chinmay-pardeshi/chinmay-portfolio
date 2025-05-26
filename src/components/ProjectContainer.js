import React, { useState } from 'react';
import './ProjectContainer.css';
import ProjectCard from './ProjectCard';
import Project1 from '../assets/Project1.jpg'; // Local image
import Project3 from "../assets/Project3.jpg"

import Project6 from "../assets/Project6.jpg"
import Project5 from "../assets/Project5.jpg"
// import Project4 from "../assets/Project4.jpg"   
  
import Project2 from "../assets/Project2.jpg"

const projects = [
  {
    title: 'Natural Language to SQL Generator',
    image: Project1, // Replace with imported image
    link: 'https://github.com/chinmay-pardeshi/natural-language-sql-generator',
    details: `Converts English questions into SQL queries using LangChain and LearnLM. Features a clean Streamlit interface for query generation and testing.`,
  },
   {
    title: 'Speech-to-Text & Translation App',
    image: Project2, // Replace with imported image
    link: 'https://github.com/chinmay-pardeshi/speech-to-text-translator',
    details: `A voice and audio transcription app that also translates content into Hindi, Marathi, or English. Built for multilingual accessibility.`,
  },
  {
    title: 'YouTube Video Summarizer',
    image: Project3, // Replace with imported image
    link: 'https://github.com/chinmay-pardeshi/youtube-ai-video-summarizer',
    details: `Summarizes YouTube transcripts into bullet points using Gemini Pro. Helps users quickly review long videos with accurate summarization.`,
  },
  {
    title: 'Gemini Chat with PDF',
    image: Project5, // Replace with imported image
    link: 'https://github.com/chinmay-pardeshi/gemini-chat-with-pdf',
    details: `Streamlit-based AI assistant that allows users to upload PDFs and ask questions about the content. Uses Google Gemini Pro to extract insights from documents like research papers, reports, or notes.`,
  },
  ,
   {
    title: 'Gemini Nutrition Analyzer',
    image: Project6, // Replace with imported image
    link: 'https://github.com/chinmay-pardeshi/gemini-nutrition-analyzer',
    details: `Built a Streamlit app using Gemini Pro Vision that analyzes food images and returns calorie and nutrition breakdown. Ideal for fitness tracking and diet planning.`,
  },
  
];

const ProjectContainer = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-container" id="projects">
      <h1 className="container-title">My Projects</h1>
      <div className="card-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
            onCardClick={() => openProjectDetails(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button onClick={closeProjectDetails} className="close-button">
              &times;
            </button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-link"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectContainer;
