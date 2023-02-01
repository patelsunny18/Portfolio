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
      duration: 0.8,
      ease: [0.455, 0.030, 0.515, 0.955],
      when: 'beforeChildren',
      staggerChildren: 0.3
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
      ease: [0.455, 0.030, 0.515, 0.955],
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

          <motion.p variants={childVariants} className="intro-text">A 4th year CS student at the University of Saskatchewan.<br></br>I have a passion for everything technology and design, from software engineering to UI/UX. When I am not programming, I enjoy trying out new coffee spots and skateboard around the city. <br></br><br></br>Currently on the lookout for my first oppurtunity!</motion.p>
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