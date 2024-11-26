import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_n0bvg4s", // Replace with your Email.js service ID
        "template_3wiqmwj", // Replace with your Email.js template ID
        formData,
        "your_user_id" // Replace with your Email.js user ID (found in account settings)
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <h2 className="text-center section-title">Contact Me</h2>
        <Row>
          {/* Contact Form Section */}
          <Col md={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
              {success && (
                <p className="text-success mt-3">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {error && (
                <p className="text-danger mt-3">
                  Something went wrong. Please try again later.
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Contact;
