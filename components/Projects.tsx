import React from 'react'
import { Container } from 'react-bootstrap'
import ProjectCard from './ProjectCard';
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

export default function Projects() {
  return (
    <Container fluid className="section-container">
      <div id='projects' />


      <motion.div
        variants={scrollAnimationVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-heading"><span>{"Things I've built"}</span></h2>

        <ProjectCard
          title={'Home With Jo'}
          image_src='/homewithjo.png'
          link={'https://homewithjo.ca'}
          description="Collaborated with a small business to design and develop a custom WordPress blogging website. I designed, developed and optimized the website, adhering to SEO standards and ensuring high performance. I also conducted thorough testing and securely integrated the development site to production before the successful launch."
          tech_list={['PHP', 'WordPress', 'Tailwind']}
          alternate={true}
          github={true}
        />
      </motion.div>

      <motion.div
        variants={scrollAnimationVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <ProjectCard
          title='Crossy Survivor'
          image_src='/crossy_survivor.png'
          link='https://github.com/patelsunny18/Crossy-Survivor/tree/main/Cmpt306_Project'
          description='A 3D crossover of Crossy Road and Vampire Survivor as a part of the Game Mechanic course. You gotta survive in a fast-paced, endless running, roguelike shoot &apos;em up and  kill every boss in your way!'
          tech_list={['Unity', 'C#']}
          alternate={false}
          github={false}
        />
      </motion.div>

      <motion.div
        variants={scrollAnimationVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <ProjectCard
          title='Shifty'
          image_src='/shifty.png'
          link='https://github.com/patelsunny18/Shifty'
          description='Shifty is a web-based restaurant scheduling application. It helps owners and managers schedule and manage staff, and track time off requests.'
          tech_list={['EJS', 'Bootstrap', 'JavaScript', 'Express.js', 'MongoDB']}
          alternate={true}
          github={false}
        />
      </motion.div>

      <motion.div
        variants={scrollAnimationVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <ProjectCard
          title={'YelpCamp'}
          image_src='/yelpcamp.png'
          link={'https://github.com/patelsunny18/YelpCamp'}
          description='Yelpcamp is a web-based platform for discovering and reviewing camping sites. Users can create, view and comment on camping site listings, complete with images, descriptions and location information. The site also allows users to rate and review individual camping sites.'
          tech_list={['EJS', 'Bootstrap', 'JavaScript', 'Express.js', 'MongoDB']}
          alternate={false}
          github={false}
        />
      </motion.div>

      <motion.div
        variants={scrollAnimationVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <ProjectCard
          title='Hurdle'
          image_src='/hurdle.png'
          link='https://github.com/patelsunny18/hurdle'
          description='Hurdle is a clone of the popular word game Wordle. It is a word puzzle game where players guess words based on a set of letters. The objective is to find all the words hidden in the grid of letters in a limited amount of time.'
          tech_list={['HTML', 'CSS', 'JavaScript', 'Express.js']}
          alternate={true}
          github={false}
        />
      </motion.div>

      <motion.div
        variants={scrollAnimationVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <ProjectCard
          title='Color Palette Generator'
          image_src='/colorPicker.png'
          link='https://github.com/patelsunny18/ReactColorPaletteGenerator'
          description='My first large-scale ReactJS project. A responsive web-based color palette generator powered with color gradient generation, color picker and ability to save color palette.'
          tech_list={['ReactJS', 'Bootstrap', 'MaterialUI']}
          alternate={false}
          github={false}
        />
      </motion.div>
    </Container>
  )
}