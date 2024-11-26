import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Pratik from "../assets/Pratik.jpg"
import "./About.css"

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section bg-light text-dark py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="about-heading">About Me</h2>
            <p className="about-description">
              I'm a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, SQL, MongoDB, Node.js, Express.js, ReactJS, Java, Python, Figma and DSA. 
              I enjoy solving real-world problems and developing user-friendly applications that create a seamless experience.
            </p>
            <p className="about-highlights">
              Passionate about learning new technologies and always ready to take on exciting challenges.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={Pratik} // Replace with your image URL
              alt="Pratik"
              className="img-fluid about-image"
            />
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default About;
