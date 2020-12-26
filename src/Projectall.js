import React from "react";
import "./Projectall.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projectall() {
  return (
    <div className="projectall">
      <Container className="projectall_container">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        {/* ..........................1st row.................................................. */}

        <Row className="projectall_row">
          <Col className="projectall_col" sm={12} md={4} lg={4}>
            <Card className="project_card">
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>para</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card className="project_card">
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>para</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card className="project_card">
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>para</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* .........................2nd row................................ */}

        <Row className="projectall_row">
          <Col sm={12} md={4} lg={4}>
            <Card className="project_card">
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>para</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card className="project_card">
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>para</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card className="project_card">
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>para</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projectall;
