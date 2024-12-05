import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Adjust the path based on your folder structure


const About = () => {
  return (
    <section id="about" className="my-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Hi! I’m sayyed nasir husain  passionate web developer with a strong foundation in JavaScript, React.js, and
              front-end development. I love building responsive and user-friendly websites.
            </p>
          </Col>
          <Col md={6}>
           <img src="../sd.jpg" alt="Profile" className="img-fluid rounded-circle" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
