import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        "pardeshichinmay16@gmail.com", // Replace with your Email.js service ID
        "pardeshichinmay16@gmail.com", // Replace with your Email.js template ID
        formData,
        "pardeshichinmay16@gmail.com" // Replace with your Email.js user ID
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
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
          {/* Left Side - Contact Form */}
          <Col md={6}>
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
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
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

          {/* Right Side - Your Contact Info */}
          <Col md={6}>
            <motion.div
              className="freelancer-info"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card className="p-4 shadow-lg">
                <Card.Body>
                  <h3 className="text-center mb-3">Why Work With Me?</h3>
                  <p>
                    Hi, I'm <strong>Chinmay</strong>, a professional freelancer
                    specializing in **ReactJS, MERN Stack, and Frontend
                    Development**. I have extensive experience in building
                    high-quality web applications.
                  </p>
                  <ul>
                    <li>✅ **Expert in ReactJS, Next.js, and Tailwind CSS**</li>
                    <li>✅ **MERN Stack Development**</li>
                    <li>✅ **Custom Web Solutions**</li>
                    <li>✅ **SEO-friendly & Responsive Designs**</li>
                    <li>✅ **Client-Focused Approach**</li>
                  </ul>
                  <h4 className="mt-3 text-center">📞 Contact Details</h4>
                  <p>
                    <strong>Name:</strong> Chinmay <br />
                    <strong>Phone:</strong> <a href="tel:+918767840482">+91 87678 40482</a> <br />
                    <strong>Email:</strong>{" "}
                    <a href="mailto:pardeshichinmay16@gmail.com">
                      pardeshichinmay16@gmail.com
                    </a>
                  </p>
                  <p className="text-center">
                    Let's build something great together! 🚀
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Contact;
