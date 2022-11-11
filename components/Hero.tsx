// import Image from 'next/image'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import headshot from '../public/headshot.jpg';

export default function Hero() {
  return (
    <section id='hero'>
      <Container fluid>
        <Row>
          <Col md={7}>
            <h1>Hello</h1>
          </Col>
          <Col md={5}>
            <h1>Sunny</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}