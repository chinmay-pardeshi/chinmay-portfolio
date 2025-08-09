import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./skills.css";

// Importing React Icons
import {  FaPython, FaJava } from "react-icons/fa";
import {  SiMysql, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiPytorch, SiPowerbi, SiTableau, SiJupyter, SiGooglecolab, SiDocker, SiGit } from "react-icons/si";
import { } from "react-icons/md";

// const skills = [
//   { name: "HTML", icon: <FaHtml5 size={50} style={{ color: "#E34F26" }} />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
//   { name: "CSS", icon: <FaCss3Alt size={50} style={{ color: "#1572B6" }} />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
//   { name: "JavaScript", icon: <SiJavascript size={50} style={{ color: "#F7DF1E" }} />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
//   { name: "Java", icon: <FaJava size={50} style={{ color: "#007396" }} />, url: "https://docs.oracle.com/javase/tutorial/" },
//   { name: "MongoDB", icon: <SiMongodb size={50} style={{ color: "#47A248" }} />, url: "https://www.mongodb.com/docs/" },
//   { name: "Express.js", icon: <SiExpress size={50} style={{ color: "#000000" }} />, url: "https://expressjs.com/" },
//   { name: "React JS", icon: <FaReact size={50} style={{ color: "#61DAFB" }} />, url: "https://reactjs.org/docs/getting-started.html" },
//   { name: "Node JS", icon: <FaNodeJs size={50} style={{ color: "#68A063" }} />, url: "https://nodejs.org/en/docs/" },
//   { name: "Figma", icon: <SiFigma size={50} style={{ color: "#F24E1E" }} />, url: "https://www.figma.com/" },
//   { name: "Python", icon: <FaPython size={50} style={{ color: "#306998" }} />, url: "https://docs.python.org/3/" },
//   { name: "Bootstrap", icon: <SiBootstrap size={50} style={{ color: "#563D7C" }} />, url: "https://getbootstrap.com/docs/" },
//   { name: "Tailwind CSS", icon: <SiTailwindcss size={50} style={{ color: "#06B6D4" }} />, url: "https://tailwindcss.com/docs" },
//   { name: "MySQL", icon: <SiMysql size={50} style={{ color: "#4479A1" }} />, url: "https://dev.mysql.com/doc/" },
//   { name: "DSA", icon: <SiJavascript size={50} style={{ color: "#F7DF1E" }} />, url: "https://www.geeksforgeeks.org/data-structures/" },
//   { name: "PHP", icon: <SiPhp size={50} style={{ color: "#777BB4" }} />, url: "https://www.php.net/docs.php" },
//   { name: "Web Security", icon: <MdSecurity size={50} style={{ color: "#4CAF50" }} />, url: "https://owasp.org/" },
//   { name: "Computer Networking", icon: <MdOutlineRouter size={50} style={{ color: "#1E90FF" }} />, url: "https://www.cisco.com/" },
// ];


const skills = [
  { name: "Python", icon: <FaPython size={50} style={{ color: "#306998" }} />, url: "https://docs.python.org/3/" },
  { name: "Java", icon: <FaJava size={50} style={{ color: "#007396" }} />, url: "https://docs.oracle.com/javase/tutorial/" },
  { name: "SQL", icon: <SiMysql size={50} style={{ color: "#4479A1" }} />, url: "https://dev.mysql.com/doc/" },
  { name: "NumPy", icon: <SiNumpy size={50} style={{ color: "#013243" }} />, url: "https://numpy.org/doc/" },
  { name: "Pandas", icon: <SiPandas size={50} style={{ color: "#150458" }} />, url: "https://pandas.pydata.org/docs/" },
  { name: "Scikit-learn", icon: <SiScikitlearn size={50} style={{ color: "#F7931E" }} />, url: "https://scikit-learn.org/stable/" },
  { name: "TensorFlow", icon: <SiTensorflow size={50} style={{ color: "#FF6F00" }} />, url: "https://www.tensorflow.org/" },
  { name: "PyTorch", icon: <SiPytorch size={50} style={{ color: "#EE4C2C" }} />, url: "https://pytorch.org/docs/" },
  { name: "Power BI", icon: <SiPowerbi size={50} style={{ color: "#F2C811" }} />, url: "https://learn.microsoft.com/en-us/power-bi/" },
  { name: "Tableau", icon: <SiTableau size={50} style={{ color: "#E97627" }} />, url: "https://www.tableau.com/learn/training" },
  { name: "Jupyter Notebook", icon: <SiJupyter size={50} style={{ color: "#F37626" }} />, url: "https://jupyter.org/" },
  { name: "Google Colab", icon: <SiGooglecolab size={50} style={{ color: "#F9AB00" }} />, url: "https://colab.research.google.com/" },
  { name: "Docker", icon: <SiDocker size={50} style={{ color: "#0db7ed" }} />, url: "https://docs.docker.com/" },
  { name: "Git & GitHub", icon: <SiGit size={50} style={{ color: "#F1502F" }} />, url: "https://git-scm.com/doc" },
];


const Skills = () => {
  const handleSkillClick = (url) => {
    window.open(url, "_blank");
  };

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
                onClick={() => handleSkillClick(skill.url)}
                style={{ cursor: "pointer" }}
              >
                <Card className="bg-secondary text-white">
                  <Card.Body>
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
