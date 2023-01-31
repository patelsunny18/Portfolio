import React from 'react'
import { Container } from 'react-bootstrap'
import NormalProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Container fluid className="section-container">
      <div id='projects' />
      <h2 className="section-heading"><span>{"Things I've built"}</span></h2>

      <NormalProjectCard
        title={'YelpCamp'}
        image_src='/yelpcamp.png'
        link={'https://github.com/patelsunny18/YelpCamp'}
        description='Yelpcamp is a web-based platform for discovering and reviewing camping sites. Users can create, view and comment on camping site listings, complete with images, descriptions and location information. The site also allows users to rate and review individual camping sites.'
        tech_list={['EJS', 'Bootstrap', 'JavaScript', 'Express.js', 'MongoDB']}
        alternate={false}
      />

      <NormalProjectCard
        title='Shifty'
        image_src='/shifty.png'
        link='https://github.com/patelsunny18/Shifty'
        description='Shifty is a web-based restaurant scheduling application. It helps owners and managers schedule and manage staff, and track time off requests.'
        tech_list={['EJS', 'Bootstrap', 'JavaScript', 'Express.js', 'MongoDB']}
        alternate={true}
      />

      <NormalProjectCard
        title='Hurdle'
        image_src='/hurdle.png'
        link='https://github.com/patelsunny18/hurdle'
        description='Hurdle is a clone of the popular word game Wordle. It is a word puzzle game where players guess words based on a set of letters. The objective is to find all the words hidden in the grid of letters in a limited amount of time.'
        tech_list={['HTML', 'CSS', 'JavaScript', 'Express.js']}
        alternate={false}
      />

      <NormalProjectCard
        title='Color Palette Generator'
        image_src='/colorPicker.png'
        link='https://github.com/patelsunny18/ReactColorPaletteGenerator'
        description='My first large-scale ReactJS project. A responsive web-based color palette generator powered with color gradient generation, color picker and ability to save color palette.'
        tech_list={['ReactJS', 'Bootstrap', 'MaterialUI']}
        alternate={true}
      />

      <NormalProjectCard
        title='Crossy Survivor'
        image_src='/crossy_survivor.png'
        link='https://github.com/patelsunny18/Crossy-Survivor/tree/main/Cmpt306_Project'
        description='A 3D crossover of Crossy Road and Vampire Survivor as a part of the Game Mechanic course. You gotta survive in a fast-paced, endless running, roguelike shoot &apos;em up and  kill every boss in your way!'
        tech_list={['Unity', 'C#']}
        alternate={false}
      />

      <NormalProjectCard
        title='Blood Donation Camp'
        image_src='/cmpt353_project.png'
        link='https://github.com/patelsunny18/CMPT-353/tree/main/Project'
        description='My first CRUD-based website, which I created for a class project. The user can perform CRUD operations in order to maintain staff and donors at a local blood donation camp. Made with both, MySQL and MongoDB Atlas.'
        tech_list={['HTML', 'CSS', 'JavaScript', 'Express.js', 'MongoDB', 'MySQL', 'Docker']}
        alternate={true}
      />
    </Container>
  )
}