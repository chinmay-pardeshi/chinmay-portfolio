import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

// Importing React Icons
import { FaCode } from "react-icons/fa"; // Web Development
import { FaLaptopCode } from "react-icons/fa"; // UI Development
import { FaPaintBrush } from "react-icons/fa"; // UI Design

const services = [
  { name: "Web Development", icon: <FaCode size={50} style={{ color: "#007bff" }} />, description: "Building fast, responsive, and modern websites using the latest technologies." },
  { name: "UI Development", icon: <FaLaptopCode size={50} style={{ color: "#28a745" }} />, description: "Crafting seamless and interactive user interfaces for enhanced user experience." },
  { name: "UI Design", icon: <FaPaintBrush size={50} style={{ color: "#ffc107" }} />, description: "Designing beautiful and user-friendly interfaces with attention to detail." }
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const handleShowModal = (service) => {
    setCurrentService(service);
    setShowModal(true);
  };
  
  const handleCloseModal = () => setShowModal(false);

  return (
    <motion.section
      id="services"
      className="services bg-light text-dark py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="text-center">
          {services.map((service, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card shadow-sm">
                  <Card.Body onClick={() => handleShowModal(service)}>
                    <div className="service-icon">{service.icon}</div>
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Service Details */}
      {currentService && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{currentService.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>About the Service</h5>
            <p>{currentService.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </motion.section>
  );
};

export default Services;
