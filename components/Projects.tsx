import Image from 'next/image';
import React from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'

import yelpcamp from '../public/yelpcamp.png';

export default function Projects() {
  return (
    <Container fluid className="section-container">
      <div id='projects' />
      <h2 className="section-heading"><span>Things I've build</span></h2>
      <Row xs={1} md={2} className="g-5 projects">
        <Col>
          <Card>
            <Card.Img variant="top" src="/yelpcamp.png" />
            <Card.Body>
              <Card.Title>YelpCamp</Card.Title>
              <Card.Text>
                <p>A web app that allows users to create, explore, and review campgrounds all over the world. To create and review campgrounds, users must first create an account.</p>
                <p></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="/hurdle.png" />
            <Card.Body>
              <Card.Title>Hurdle</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="/colorPicker.png" />
            <Card.Body>
              <Card.Title>React Color Palette Generator</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="/cmpt353_project.png" />
            <Card.Body>
              <Card.Title>CMPT 353 Project</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}