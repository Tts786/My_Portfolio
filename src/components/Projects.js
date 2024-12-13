import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: "e-commerce",
    description: "Fale Fashan is a fictional e-commerce website that specializes in selling fashion products online",
    link: "https://tts786.github.io/e-commerce/"
  },
  {
    title: "Simple Calculato",
    description: "A simple calculator is a basic tool that allows users to perform fundamental arithmetic operations like addition, subtraction, multiplication, and division.",
    link: "https://tts786.github.io/calculator/"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="my-5">
      <Container>
        <h2>My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;


