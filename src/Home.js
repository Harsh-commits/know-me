import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-particles-js";
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
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 1,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "bottom",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Home;
