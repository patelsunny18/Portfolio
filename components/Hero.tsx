import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headshot from '../public/headshot.jpg';
import headshot_transparent from '../public/headshot-transparent.png';

export default function Hero() {
  return (
    <Container fluid className="hero-container">
      <Row>
        <Col md={7}>
          <p style={{
            color: '#54ECC4',
            fontFamily: 'Source Code Pro, monospace',
            fontSize: 'clamp(14px, 5vw, 16px)'
          }}>
            Hi, I am
          </p>

          <h1 style={{
            color: '#CED7F3',
            fontSize: 'clamp(40px, 8vw, 80px)'
          }}>
            Sunny Patel.
          </h1>

          <p style={{
            color: '#8A93AD',
            fontSize: 'clamp(18px, 4vw, 20px)'
          }}>A 4th year CS student at the University of Saskatchewan.<br></br>I have a passion for everything technology and design, from software engineering to UI/UX. When I am not programming, I enjoy trying out new coffee spots in the city and skateboard by the river. <br></br><br></br>Currently on the lookout for my first oppurtunity!</p>
        </Col>
        <Col md={5}>
          <div className="headshot-container m-auto">
            <Image
              src={headshot}
              alt="A picture of me"
              className="fit-image rounded"
            ></Image>
          </div>
        </Col>
      </Row>
    </Container>
  )
}