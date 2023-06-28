import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headshot from '../public/headshot.jpg';
import { motion, Variants } from 'framer-motion';


const scrollAnimationVariant: Variants = {
  hidden: {
    opacity: 0,
    y: '180'
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.250, 0.460, 0.450, 0.940]
    }
  }
}

export default function About() {
  return (
    <Container fluid className="section-container">
      <div id='about'></div>
      <motion.div
        variants={scrollAnimationVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="section-heading"><span>About Me</span></h2>
        <Row className="about g-5">
          <Col md={5}>
            <div className="headshot-container m-auto">
              <Image
                src={headshot}
                alt=''
                className="headshot rounded"
              />
            </div>
          </Col>
          <Col md={7}>
            <div>
              <p>
                Hello! My name is Sunny Patel. Born and raised in India and I am currently enrolled in a four-year Bachelor of Science in Computer Science at the University of Saskatchewan.
              </p>
              <p>
                {"My earliest experience with a computer took place when I was 10 years old when my father brought home our first PC. Since then, I've been fascinated by how computers worked, and now, at the age of 23, I'm still fascinated and privileged to learn about the vast world of computers and the internet of things."}</p>
              <p>
                {"I'm particularly interested in developing responsive and interactive front-ends, as well as secure and robust back-ends, along with designing familiar and intuitive UI/UX and human-computer interaction."}
              </p>
              <p>
                My skillset includes:
              </p>
            </div>
            <ul className="skills-list">
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Next.JS</li>
              <li>Bootstrap</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </Col>
        </Row>
      </motion.div>
    </Container>
  )
}