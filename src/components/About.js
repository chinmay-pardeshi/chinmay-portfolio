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
              I’m a Data Science and Machine Learning Enthusiast with hands-on experience in building intelligent systems and analyzing data to solve real-world problems.
              I specialize in Python, SQL, Power BI, Pandas, NumPy, and Machine Learning libraries like Scikit-learn, TensorFlow, and PyTorch.
              During my internship at DRDO, I worked on deep learning models such as CNN, RCNN, and Vision Transformers, gaining experience in training on custom datasets and applying research-based solutions.

              I’m passionate about making data-driven decisions, automating ML workflows, and deploying solutions using tools like Docker, Streamlit, and Google Colab.
              I enjoy turning raw data into insights and building impactful AI/ML applications that improve systems and experiences.
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
