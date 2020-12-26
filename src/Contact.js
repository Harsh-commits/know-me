import React from "react";
import "./Contact.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <Container className="contact_container">
        <Row>
          <Col className="contact_container_left_col" sm={12} md={6} lg={6}>
            <img
              className="contact_container_left_col_img"
              src="https://www.jeffkram.com/wp-content/uploads/2019/02/contact-me-png-6.png"
              alt="Card image"
            />
          </Col>
          <Col className="contact_container_right_col" sm={12} md={6} lg={6}>
            <h1>Get In Touch</h1>
            <Form className="ml-3 p-3">
              <Form.Group controlId="name_area">
                <Form.Label className="form_label">Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="email_area">
                <Form.Label className="form_label">Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="phone_area">
                <Form.Label className="form_label">Phone Number</Form.Label>
                <Form.Control type="text" placeholder="0123456789" />
              </Form.Group>

              <Form.Group controlId="message_area">
                <Form.Label className="form_label">Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <Button className="btn">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Contact;
