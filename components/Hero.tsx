import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import illustration from '../public/illustration.svg';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.250, 0.460, 0.450, 0.940],
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
}

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.250, 0.460, 0.450, 0.940],
    }
  }
}

const MotionCol = motion(Col);

export default function Hero() {
  return (
    <Container fluid className="hero-container">
      <Row>
        <MotionCol
          md={7}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={childVariants} className="hello-text">
            Hi, I am
          </motion.p>

          <motion.h1 variants={childVariants} className="name-heading">
            Sunny Patel.
          </motion.h1>

          <motion.h2 variants={childVariants} className="hero-text">
            Coder & Designer
          </motion.h2>

          <motion.p variants={childVariants} className="intro-text">I{"'"}m a recent gradute from the University of Saskatchewan, fueled by a deep passion for technology and design. From software engineering to UI/UX, I am driven to explore and innovate. When I{"'"}m not programming, you{"'"}ll find me exploring new coffee spots and skateboarding through the city.<br></br><br></br>Eagerly seeking my first opportunity!</motion.p>
        </MotionCol>

        <MotionCol
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={childVariants} className="illustration-container m-auto">
            <Image
              src={illustration}
              alt='a vector image with a character and bulb representing idea'
              className="illustration"
            />
          </motion.div>
        </MotionCol>
      </Row>
    </Container >
  )
}