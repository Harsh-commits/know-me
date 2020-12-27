import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Footer() {
  return (
    <div className="footer">
      <Container className="footer_container">
        <Row className="footer_container_row1">
          <Col sm={12}>
            <span className="home_icons">
              <LinkedInIcon className="home_icons_icon" />
              <GitHubIcon className="home_icons_icon" />
              <FacebookIcon className="home_icons_icon" />
              <TwitterIcon className="home_icons_icon" />
              <WhatsAppIcon className="home_icons_icon" />
            </span>
          </Col>
        </Row>
        <Row className="footer_container_row2">
          <Col className="footer_container_row2_col1" sm={12} lg={6}>
            <p>© 2020 Harsh Kumar. All Right Reserved.</p>
          </Col>
          <Col className="footer_container_row2_col2" sm={12} lg={6}>
            <p>
              Built with <FavoriteIcon style={{ color: "#f00" }} /> in India.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
