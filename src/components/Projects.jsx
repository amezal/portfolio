import React from 'react';
import '../styles/Projects.scss';
import Project from './Project';
import Emprende from '../assets/Emprende.mp4';

const Projects = () => {

  return (
    <section className='projects' id='projects'>
      <h2>Projects</h2>
      <div className="projects__list">
        <Project
          name="Proyecto Emprende"
          description="Website para Proyecto Emprende"
          github=""
          live="https://emprende.netlify.app"
          video={Emprende}
        />
      </div>
      <h1>asdfa</h1>
      <h1>asdfa</h1>
      <h1>asdfa</h1>
      <h1>asdfa</h1>
      <h1>asdfa</h1>
      <h1>asdfa</h1>
      <h1>asdfa</h1>
      <h1>asdfa</h1>
      <h1>asdfa</h1>
    </section>
  )
}

export default Projects