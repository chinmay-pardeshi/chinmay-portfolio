import React, { useState } from 'react';
import './ProjectContainer.css';
import ProjectCard from './ProjectCard';
import Project1 from '../assets/Project1.jpg'; // Local image
import Project3 from "../assets/Project3.png"
import Project6 from "../assets/Project6.png"
import Project5 from "../assets/Project5.png"
import Project4 from "../assets/Project4.png"
import Project2 from "../assets/Project2.png"

const projects = [
  {
    title: 'Robotics Club Website Development ',
    image: Project1, // Replace with imported image
    link: 'http://sanjivani-robotics-website.netlify.app/',
    details: `Developed a full-stack web application for the Robotics Club. The frontend was built using React.js, while
              the backend was developed using Express.js and Node.js. Implemented user authentication using bcrypt
              and JWT, along with body-parser for handling requests. The website features member profiles, event
              management, and a contact system to streamline communication within the club.`,
  },
  {
    title: 'Not mention ',
    image: Project2, // Replace with imported image
    link: '',
    details: ``,
  },
  {
    title: 'Placement Management System',
    image: Project3,
    link: 'https://pratik9307.github.io/Placement_Management_System/',
    details: `A Placement Management System is a web application designed to streamline and manage the
             recruitment process for educational institutions or placement agencies. `,
  },
  {
    title: 'Amazon Clone using ReactJS ',
    image: Project4, // Replace with imported image
    link: '',
    details: `Creating an Amazon Clone using ReactJS is a project that involves replicating the basic functionalities of
            the Amazon website, focusing on the frontend using ReactJS.`,
  },
 
  {
    title: 'Shoping cart App',
    image: Project5, // Replace with imported image
    link: 'https://shoping-cart-app-reactjs.netlify.app/',
    details: `A simple shopping cart webpage using React.js allows users to browse a list of products, add them to a cart, and manage the cart items. The application is structured with reusable React components like a ProductList to display available products and a Cart to show items added by the user. State management is handled using React's useState hook to track the cart items and their quantities. The cart dynamically updates as users add or remove items or adjust quantities. Additionally, the total price is recalculated in real time. The app provides an interactive and responsive user experience, making it a perfect example of a beginner-friendly React project to learn about component-based design and state management.`,
  },
  {
    title: 'Password Generator',
    image: Project6, // Replace with imported image
    link: 'https://pratik9307.github.io/Password-Generator02/',
    details: `A Password Generator is a simple yet highly functional tool or application designed to create strong, random, and secure passwords for online accounts, applications, and other purposes. It helps users avoid weak or predictable passwords, thereby enhancing security against cyber threats like hacking or brute-force attacks.`,
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
