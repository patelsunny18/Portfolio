import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SiGithub } from "react-icons/si";

import yelpcamp from '../public/yelpcamp.png';
import shifty from '../public/shifty.png';
import hurdle from '../public/hurdle.png';
import colorPicker from '../public/colorPicker.png';
import crossy_survivor from '../public/crossy_survivor.png';
import cmpt353_project from '../public/cmpt353_project.png';

export default function Projects() {
  return (
    <Container fluid className="section-container">
      <div id='projects' />
      <h2 className="section-heading"><span>{"Things I've built"}</span></h2>

      <Row className="project">
        <Col xs={12} md={6}>
          <div className="project-image">
            <a href="https://github.com/patelsunny18/YelpCamp" target={'_blank'} rel="noreferrer">
              <Image
                src={yelpcamp}
                alt='A screenshot of YelpCamp homepage'
                className="image"
              />
            </a>
          </div>
        </Col>
        <Col>
          <div className="project-content">
            <h3 className="project-title">
              <a href="https://github.com/patelsunny18/YelpCamp" target={'_blank'} rel="noreferrer">YelpCamp</a>
            </h3>
            <div className="project-description">
              <p>
                Yelpcamp is a web-based platform for discovering and reviewing camping sites. Users can create, view and comment on camping site listings, complete with images, descriptions and location information. The site also allows users to rate and review individual camping sites.
              </p>
            </div>
            <ul className="project-tech-list">
              <li>EJS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
            <div className="project-button">
              <a href="https://github.com/patelsunny18/YelpCamp" target={'_blank'} rel="noreferrer" className="btn"><SiGithub size={'1.5em'} /></a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="project">
        <Col>
          <div className="project-content">
            <h3 className="project-title">
              <a href="https://github.com/patelsunny18/Shifty" target={'_blank'} rel="noreferrer">Shifty</a>
            </h3>
            <div className="project-description">
              <p>
                Shifty is a web-based restaurant scheduling application. It helps owners and managers schedule and manage staff, and track time off requests.
              </p>
            </div>
            <ul className="project-tech-list">
              <li>EJS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
            <div className="project-button">
              <a href="https://github.com/patelsunny18/Shifty" target={'_blank'} rel="noreferrer" className="btn"><SiGithub size={'1.5em'} /></a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="project-image">
            <a href="https://github.com/patelsunny18/Shifty" target={'_blank'} rel="noreferrer">
              <Image
                src={shifty}
                alt='A screenshot of Shifty'
                className="image"
              />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="project">
        <Col xs={12} md={6}>
          <div className="project-image">
            <a href="https://github.com/patelsunny18/hurdle" target={'_blank'} rel="noreferrer">
              <Image
                src={hurdle}
                alt='A screenshot of Hurdle'
                className="image"
              />
            </a>
          </div>
        </Col>
        <Col>
          <div className="project-content">
            <h3 className="project-title">
              <a href="https://github.com/patelsunny18/hurdle" target={'_blank'} rel="noreferrer">Hurdle</a>
            </h3>
            <div className="project-description">
              <p>
                Hurdle is a clone of the popular word game Wordle. It is a word puzzle game where players guess words based on a set of letters. The objective is to find all the words hidden in the grid of letters in a limited amount of time.
              </p>
            </div>
            <ul className="project-tech-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Express.js</li>
            </ul>
            <div className="project-button">
              <a href="https://github.com/patelsunny18/hurdle" target={'_blank'} rel="noreferrer" className="btn"><SiGithub size={'1.5em'} /></a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="project">
        <Col>
          <div className="project-content">
            <h3 className="project-title">
              <a href="https://github.com/patelsunny18/ReactColorPaletteGenerator" target={'_blank'} rel="noreferrer">Color Palette Generator</a>
            </h3>
            <div className="project-description">
              <p>
                My first large-scale ReactJS project. A responsive web-based color palette generator powered with color gradient generation, color picker and ability to save color palette.
              </p>
            </div>
            <ul className="project-tech-list">
              <li>ReactJS</li>
              <li>Bootstrap</li>
              <li>MaterialUI</li>
            </ul>
            <div className="project-button">
              <a href="https://github.com/patelsunny18/ReactColorPaletteGenerator" target={'_blank'} rel="noreferrer" className="btn"><SiGithub size={'1.5em'} /></a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="project-image">
            <a href="https://github.com/patelsunny18/ReactColorPaletteGenerator" target={'_blank'} rel="noreferrer">
              <Image
                src={colorPicker}
                alt='A screenshot of Color Palette Generator'
                className="image"
              />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="project">
        <Col xs={12} md={6}>
          <div className="project-image">
            <a href="https://github.com/patelsunny18/Crossy-Survivor/tree/main/Cmpt306_Project" target={'_blank'} rel="noreferrer">
              <Image
                src={crossy_survivor}
                alt='A screenshot of Crossy Survivor'
                className="image"
              />
            </a>
          </div>
        </Col>
        <Col>
          <div className="project-content">
            <h3 className="project-title">
              <a href="https://github.com/patelsunny18/Crossy-Survivor/tree/main/Cmpt306_Project" target={'_blank'} rel="noreferrer">Hurdle</a>
            </h3>
            <div className="project-description">
              <p>
                A 3D crossover of Crossy Road and Vampire Survivor as a part of the Game Mechanic course. You gotta survive in a fast-paced, endless running, roguelike shoot &apos;em up and  kill every boss in your way!
              </p>
            </div>
            <ul className="project-tech-list">
              <li>Unity</li>
              <li>C#</li>
            </ul>
            <div className="project-button">
              <a href="https://github.com/patelsunny18/Crossy-Survivor/tree/main/Cmpt306_Project" target={'_blank'} rel="noreferrer" className="btn"><SiGithub size={'1.5em'} /></a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="project">
        <Col>
          <div className="project-content">
            <h3 className="project-title">
              <a href="https://github.com/patelsunny18/CMPT-353/tree/main/Project" target={'_blank'} rel="noreferrer">Blood Donation Camp</a>
            </h3>
            <div className="project-description">
              <p>
                My first CRUD-based website, which I created for a class project. The user can perform CRUD operations in order to maintain staff and donors at a local blood donation camp. Made with both, MySQL and MongoDB Atlas.
              </p>
            </div>
            <ul className="project-tech-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Docker</li>
            </ul>
            <div className="project-button">
              <a href="https://github.com/patelsunny18/CMPT-353/tree/main/Project" target={'_blank'} rel="noreferrer" className="btn"><SiGithub size={'1.5em'} /></a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="project-image">
            <a href="https://github.com/patelsunny18/CMPT-353/tree/main/Project" target={'_blank'} rel="noreferrer">
              <Image
                src={cmpt353_project}
                alt='A screenshot of Blood Donation Camp homepage'
                className="image"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}