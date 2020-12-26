import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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
            <span className="home_icons">
              <LinkedInIcon className="home_icons_icon" />
              <GitHubIcon className="home_icons_icon" />
              <FacebookIcon className="home_icons_icon" />
              <TwitterIcon className="home_icons_icon" />
              <WhatsAppIcon className="home_icons_icon" />
            </span>
          </Col>
          <Col sm={6} className="home_container_col2">
            <img
              fluid
              src="https://www.infomazeelite.com/wp-content/uploads/2020/01/MERN-stack-development-services-1.png"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
