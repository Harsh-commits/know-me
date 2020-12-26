import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <Container className="home_container">
        <Row>
          <Col sm={6} className="home_container_col1">
            <h3 className="home_container_col1_h3">Hey </h3>
            <h1>I'm Harsh</h1>
            <h3 className="home_container_col1_profile">
              Full Stack Web Developer
            </h3>
            <span></span>
          </Col>
          <Col sm={6} className="home_container_col2">
            <img fluid src="https://d1mwexcsjeyerr.cloudfront.net/images/meanstack/side-img-2.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
