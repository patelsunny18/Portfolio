import Image from 'next/image';
import React from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import { FaNode, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaCode, FaDocker } from 'react-icons/fa'
import { SiMaterialui, SiMongodb, SiMysql, SiUnity, SiCsharp } from "react-icons/si";

import yelpcamp from '../public/yelpcamp.png';

export default function Projects() {
  return (
    <Container fluid className="section-container">
      <div id='projects' />
      <h2 className="section-heading"><span>{"Things I've built"}</span></h2>
      <Row xs={1} md={2} className="g-5 projects">
        <Col>
          <Card>
            <Card.Img variant="top" src="/yelpcamp.png" />
            <Card.Body>
              <Card.Title>YelpCamp</Card.Title>
              <Card.Text>
                A web application for campground reviews and information. Implemented user authentication, authorization and comments feature.
                <br /><br />
                Made with:<br />
                <FaHtml5 size={'1.5em'} /><FaBootstrap size={'1.5em'} /><FaJsSquare size={'1.5em'} /><FaNode size={'1.5em'} /><SiMongodb size={'1.5em'} />
              </Card.Text>
              <div className="card-button">
                <a href="https://github.com/patelsunny18/YelpCamp" target={'_blank'} rel="noreferrer" className="btn btn-primary">Code <FaCode /></a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="/shifty.png" />
            <Card.Body>
              <Card.Title>Shifty</Card.Title>
              <Card.Text>
                A full-stack web application for restaurant scheduling as a part of Intermediate Software Engineering class. Implemented employee availability input, shift swapping, time-off requests, schedule sharing and conflict resolution features.
                <br /><br />
                Made with:<br />
                <FaHtml5 size={'1.5em'} /><FaBootstrap size={'1.5em'} /><FaJsSquare size={'1.5em'} /><FaNode size={'1.5em'} /><SiMongodb size={'1.5em'} />
              </Card.Text>
              <div className="card-button">
                <a href="https://github.com/patelsunny18/Shifty" target={'_blank'} rel="noreferrer" className="btn btn-primary">Code <FaCode /></a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="/hurdle.png" />
            <Card.Body>
              <Card.Title>Hurdle</Card.Title>
              <Card.Text>
                A learning version of the popular web app Wordle. The user has six attempts to guess a five-letter word. Every 24 hours, a new word is generated.
                <br /><br />
                Made with:<br />
                <FaNode size={'1.5em'} /><FaJsSquare size={'1.5em'} /><FaHtml5 size={'1.5em'} /><FaCss3Alt size={'1.5em'} />
              </Card.Text>
              <div className="card-button">
                <a href="https://github.com/patelsunny18/hurdle" target={'_blank'} rel="noreferrer" className="btn btn-primary">Code <FaCode /></a>
              </div>
            </Card.Body>
          </Card>
        </Col>  

        <Col>
          <Card>
            <Card.Img variant="top" src="/colorPicker.png" />
            <Card.Body>
              <Card.Title>Color Palette Generator</Card.Title>
              <Card.Text>
                My first large-scale ReactJS project. A responsive web-based color palette generator powered with color gradient generation, color picker and ability to save color palette.
                <br /><br />
                Made with:<br />
                <FaReact size={'1.5em'} /><FaBootstrap size={'1.5em'} /><SiMaterialui size={'1.5em'} />
              </Card.Text>
              <div className="card-button">
                <a href="https://github.com/patelsunny18/ReactColorPaletteGenerator" target={'_blank'} rel="noreferrer" className="btn btn-primary">Code <FaCode /></a>
              </div>
            </Card.Body>
          </Card>
        </Col>  

        <Col>
          <Card>
            <Card.Img variant="top" src="/crossy_survivor.png" />
            <Card.Body>
              <Card.Title>Crossy Survivor</Card.Title>
              <Card.Text>
                A 3D crossover of Crossy Road and Vampire Survivor as a part of the Game Mechanic course. You gotta survive in a fast-paced, endless running, roguelike shoot &apos;em up and  kill every boss in your way! 
                <br /><br />
                Made with:<br />
                <SiUnity size={'1.5em'} /><SiCsharp size={'1.5em'} />
              </Card.Text>
              <div className="card-button">
                <a href="https://github.com/patelsunny18/Crossy-Survivor/tree/main/Cmpt306_Project" target={'_blank'} rel="noreferrer" className="btn btn-primary">Code <FaCode /></a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="/cmpt353_project.png" />
            <Card.Body>
              <Card.Title>CMPT 353 Project</Card.Title>
              <Card.Text>
                My first CRUD-based website, which I created for a class project. The user can perform CRUD operations in order to maintain staff and donors at a local blood donation camp. Made with both, MySQL and MongoDB Atlas.
                <br /><br />
                Made with:<br />
                <FaHtml5 size={'1.5em'} /><FaCss3Alt size={'1.5em'} /><FaJsSquare size={'1.5em'} /><SiMongodb size={'1.5em'} /><SiMysql size={'1.5em'} /><FaDocker size={'1.5em'} />
              </Card.Text>
              <div className="card-button">
                <a href="https://github.com/patelsunny18/CMPT-353/tree/main/Project" target={'_blank'} rel="noreferrer" className="btn btn-primary">Code <FaCode /></a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}