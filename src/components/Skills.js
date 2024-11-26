import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./skills.css"

// Importing React Icons
import { FaHtml5 } from "react-icons/fa"; // HTML
import { FaCss3Alt } from "react-icons/fa"; // CSS
import { SiJavascript } from "react-icons/si"; // JavaScript
import { FaReact } from "react-icons/fa"; // ReactJS
import { FaNodeJs } from "react-icons/fa"; // NodeJS
import { SiFigma } from "react-icons/si"; // Figma
import { FaPython } from "react-icons/fa"; // Python
import { SiBootstrap } from "react-icons/si"; // Bootstrap
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS
import { SiMongodb } from "react-icons/si"; // MongoDB (MongoDB logo)
import { SiExpress } from "react-icons/si"; // Express.js
import { SiMysql } from "react-icons/si"; // SQL (MySQL)

const skills = [
  { name: "HTML", icon: <FaHtml5 size={50} style={{ color: "#E34F26" }} /> }, // HTML color
  { name: "CSS", icon: <FaCss3Alt size={50} style={{ color: "#1572B6" }} /> }, // CSS color
  { name: "JavaScript", icon: <SiJavascript size={50} style={{ color: "#F7DF1E" }} /> }, // JS color
  { name: "React JS", icon: <FaReact size={50} style={{ color: "#61DAFB" }} /> }, // React color
  { name: "Node JS", icon: <FaNodeJs size={50} style={{ color: "#68A063" }} /> }, // NodeJS color
  { name: "MongoDB", icon: <SiMongodb size={50} style={{ color: "#47A248" }} /> }, // MongoDB color
  { name: "Figma", icon: <SiFigma size={50} style={{ color: "#F24E1E" }} /> }, // Figma color
  { name: "Python", icon: <FaPython size={50} style={{ color: "#306998" }} /> }, // Python color
  { name: "Bootstrap", icon: <SiBootstrap size={50} style={{ color: "#563D7C" }} /> }, // Bootstrap color
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} style={{ color: "#06B6D4" }} /> }, // Tailwind color
  { name: "SQL", icon: <SiMysql size={50} style={{ color: "#4479A1" }} /> }, // MySQL color (SQL)
  { name: "Express.js", icon: <SiExpress size={50} style={{ color: "#000000" }} /> }, // Express.js color
  { name: "DSA", icon: <SiJavascript size={50} style={{ color: "#F7DF1E" }} /> }, // DSA - Representing with JS icon
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills bg-dark text-white py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
      

        <h2 className="text-center mb-4">Technical Skills</h2>
        <Row className="text-center">
          {skills.map((skill, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-secondary text-white">
                  <Card.Body>
                    {/* Display React Icons here */}
                    {skill.icon}
                    <h4>{skill.name}</h4>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Skills;
