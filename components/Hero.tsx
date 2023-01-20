import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headshot from '../public/headshot.jpg';
import illustration from '../public/illustration.svg';

export default function Hero() {
  return (
    <Container fluid className="hero-container">
      <Row>
        <Col md={7}>
          <p className="hello-text">
            Hi, I am
          </p>

          <h1 className="name-heading">
            Sunny Patel.
          </h1>

          <h2 className="hero-text">
            Coder & Designer
          </h2>

          <p className="intro-text">A 4th year CS student at the University of Saskatchewan.<br></br>I have a passion for everything technology and design, from software engineering to UI/UX. When I am not programming, I enjoy trying out new coffee spots and skateboard around the city. <br></br><br></br>Currently on the lookout for my first oppurtunity!</p>
        </Col>
        <Col>
          <div className="illustration-container m-auto">
            <Image
              src={illustration}
              alt='a vector image with a character and bulb representing idea'
              className="illustration"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}