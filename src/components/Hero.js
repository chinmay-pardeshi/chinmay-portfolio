import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons
import "./Hero.css"

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
            <h1>
              Hello, I am <span className="highlight">Pratik Satalkar</span>
            </h1>
            <h2>
              I’m a <span className="highlight">Full Stack Developer</span>
            </h2>
            <p>
              Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality
            </p>
            {/* Social Icons */}
            <div className="social-icons">
              <a
                href="www.linkedin.com/in/pratiksatalkar"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Pratik9307"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaGithub />
              </a>
              <a
                href="satalkarpratik0@gmail.com"
                className="icon"
              >
                <FaEnvelope />
              </a>
            </div>
            <Button variant="primary" size="lg" href="#contact" className="mt-3">
              Let's Connect
            </Button>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Hero;
