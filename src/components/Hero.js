import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa"; // Import icons
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      className="hero bg-dark text-white text-center py-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Row>
          <Col>
            <h1 className="animated-heading">
              Hello, I am <span className="highlight">Chinmay Pardeshi</span>
            </h1>
            <h2 className="animated-subheading">
              I’m a <span className="highlight">AI/ML Developer Bridging Algorithms and Real-World Problems, Turning Models into Smart Solutions </span>
            </h2>
            <p className="animated-paragraph">
              Bridging Data and Intelligence, Turning Algorithms into Real-World Impact
            </p>
            {/* Social Icons */}
            <div className="social-icons animated-social">
              <a
                href="https://www.linkedin.com/in/chinmay-pardeshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/chinmay-pardeshi"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:pardeshichinmay16@gmail.com"
                className="icon"
              >
                <FaEnvelope />
              </a>
            </div>
            {/* Button to download resume */}
            <Button
              variant="primary"
              size="lg"
              href="/resume/Chinmay-pardeshi.pdf" // Replace with the actual path to your resume
              download="Chinmay_Pardeshi_Resume"                       //Pratik_Satalkar_Resume
              className="mt-3 download-button"
            >
              <FaDownload className="download-icon" /> Download Resume
            </Button>
            {/* Button to connect */}
            <Button
              variant="outline-light"
              size="lg"
              href="#contact"
              className="mt-3 ml-2 connect-button"
            >
              Let's Connect
            </Button>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Hero;
// when i click on gmail it is not working 
