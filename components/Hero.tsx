import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headshot from '../public/headshot.jpg';

export default function Hero() {
  return (
    <section id='hero'>
      <Container fluid className="hero-container">
        <Row>
          <Col md={7}>
            <h1>Hello</h1>
          </Col>
          <Col md={5} className="hero-img">
            <Image
              src={headshot}
              alt=""
              className="img-fluid"
              style={{maxHeight: "386px"}}
            ></Image>
          </Col>
        </Row>
      </Container>
    </section>
  )
}