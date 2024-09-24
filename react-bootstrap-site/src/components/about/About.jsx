import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";

const About = () => {
  return (
    <div>
      <Container className="mx-auto">
        <Row className="justify-content-center">
          {/* breakpoints that center the cards even if the screen gets smaller */}
          <Col xs="auto" sm="auto" md="auto" className="mx-1 mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://placehold.co/100x90" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="auto" sm="auto" md="auto" className="mx-1 mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://placehold.co/100x90" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="auto" sm="auto" md="auto" className="mx-1 mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://placehold.co/100x90" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
