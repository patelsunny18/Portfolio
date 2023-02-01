import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion, Variants } from 'framer-motion';


const scrollAnimationVariant: Variants = {
  hidden: {
    opacity: 0,
    y: '200'
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.455, 0.030, 0.515, 0.955]
    }
  }
}

export default function Contact() {
  return (
    <Container fluid className="section-container">
      <div id='contact'></div>
      <motion.div
        variants={scrollAnimationVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="section-heading"><span>Get In Touch</span></h2>

        <Row className="contact g-5">
          <Col>
            <h3 className="contact-text">
              Feel <span style={{ color: '#91FCDC' }}>{'free'}</span> to connect with me
            </h3>

            <div className="socials">
              <a href='https://www.instagram.com/patel_sunny18/' target={'_blank'} rel="noreferrer">
                <BsInstagram />
              </a>

              <a href='https://www.linkedin.com/in/sunny-ka-patel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQVylyNPdSJG7JwIGoj3YCg%3D%3D' target={'_blank'} rel="noreferrer">
                <BsLinkedin />
              </a>
              <a href='https://github.com/patelsunny18' target={'_blank'} rel="noreferrer">
                <BsGithub />
              </a>
            </div>

            <div className="email-button">
              <Button>
                <a href="mailto:psunny1411@gmail.com">EMAIL, PERHAPS?</a>
              </Button>
            </div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  )
}