import React from "react";
import "./About.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <div className="about">
      <Container className="about_container">
        <Row>
          <Col sm={6} className="about_container_col1">
            <img
              fluid
              src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
            />
          </Col>
          <Col sm={6} className="about_container_col2">
            <h1>LET ME INTRODUCE MYSELF</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              rerum iure obcaecati vel possimus officia maiores perferendis ut!
              Quos, perspiciatis.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here
            </p>
            <Button className="btn">DOWNLOAD CV</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
