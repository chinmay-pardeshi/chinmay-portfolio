import React, { useState } from 'react';
import './ProjectContainer.css';
import ProjectCard from './ProjectCard';
import Project1 from '../assets/Project1.jpg'; // Local image
import Project2 from "../assets/Project2.jpg"
import Project3 from "../assets/Project3.jpg"
import Project4 from "../assets/Project4.jpg"
import Project5 from "../assets/Project5.jpg"
import Project6 from "../assets/Project6.jpg"
import Project7 from "../assets/Project7.jpg"
// import Project4 from "../assets/Project4.jpg"

const projects = [
  {
    title: 'Smart ATS Resume Scanner',
    image: Project1,
    link: 'https://smart-ats-resume-scanner-version1.streamlit.app/',
    details: `An AI-powered resume evaluator that analyzes your resume against job descriptions using Google Gemini Pro. It gives feedback and optimization tips to improve ATS compatibility and help job seekers stand out.`,
  },
  {
    title: 'Gemini Nutrition Analyzer',
    image: Project2,
    link: 'https://gemini-nutrition-analyzer-version1.streamlit.app/',
    details: `Upload food images and get a detailed calorie and nutritional breakdown using Google Gemini Vision—perfect for tracking meals and planning diets.`,
  },
  {
    title: 'Gemini Chat with PDF',
    image: Project3,
    link: 'https://gemini-chat-with-pdf-version1.streamlit.app/',
    details: `Upload a PDF—like research papers, reports, or notes—and ask questions using Google Gemini Pro for intelligent insights and summaries.`,
  },
  {
    title: 'Gemini Vision Chat',
    image: Project4,
    link: 'https://gemini-vision-chat-version1.streamlit.app/',
    details: `Interact directly with images using natural language. Upload an image and have a conversational assistant powered by Gemini Vision to analyze and discuss it.`,
  },
  {
    title: 'Gemini Streamlit Chatbot',
    image: Project5,
    link: 'https://gemini-app-chatbot-version1.streamlit.app/',
    details: `A Streamlit-based conversational AI chatbot with persistent memory, powered by Google’s Gemini, for context-aware and continuous dialogues.`,
  },
  {
    title: 'YouTube AI Video Summarizer',
    image: Project6,
    link: 'https://youtube-ai-video-summarizer-version.streamlit.app/',
    details: `Paste a YouTube video link, and get key bullet-point summaries of the transcript using Gemini Pro—great for quickly reviewing lengthy videos.`,
  },
  {
    title: 'Speech-to-Text & Translation App',
    image: Project7,
    link: 'https://speech-to-text-translator-version1.streamlit.app/',
    details: `Transcribe voice or audio input, then translate it seamlessly into Hindi, Marathi, or English for accessible multilingual communication.`,
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
