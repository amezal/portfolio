import React from 'react';
import '../styles/Projects.scss';
import { useLanguage } from '../language/Language';
import Project from './Project';
import Emprende from '../assets/Emprende.mp4';
// import Emprende from '../assets/Emprende.mp4';
// import Emprende from '../assets/Emprende.mp4';
// import Emprende from '../assets/Emprende.mp4';
// import Emprende from '../assets/Emprende.mp4';
import { FaReact, FaSass, FaWordpress, FaGoogle, FaNode } from 'react-icons/fa';
import { SiAuth0, SiMongodb, SiVite, SiGatsby } from 'react-icons/si';
import { DiCss3, DiJavascript, DiHtml5 } from 'react-icons/di';
import { ReactComponent as P5Icon } from '../assets/P5JS.svg';

const Projects = () => {

  const { dictionary } = useLanguage();
  const texts = dictionary.projects.list;

  const ReactIcon = <FaReact alt='react' />
  const Sass = <FaSass alt='sas' />
  const WP = <FaWordpress alt='wordpress' />
  const Google = <FaGoogle alt='google' />
  const Node = <FaNode alt='node' />
  const Gatsby = <SiGatsby alt='gatsby' />
  const Auth0 = <SiAuth0 alt='auth0' />
  const Mongo = <SiMongodb alt='mongodb' />
  const Vite = <SiVite alt='vite' />
  const CSS = <DiCss3 alt='css' />
  const JS = <DiJavascript alt='javascript' />
  const HTML = <DiHtml5 alt='html' />
  const P5 = <P5Icon alt='p5.js' />


  const projects = {
    greatreads: {
      ...texts.greatreads,
      github: 'https://github.com/Amezal/great-reads-frontend',
      live: 'https://emprende.netlify.app',
      video: Emprende,
      icons: [ReactIcon, Auth0, Mongo, HTML, CSS, JS, Node]
    },
    emprende: {
      ...texts.emprende,
      github: 'https://github.com/Amezal/emprende-website',
      live: 'https://emprende.netlify.app',
      video: Emprende,
      icons: [ReactIcon, Gatsby, WP, Google, HTML, Sass, JS]
    },
    daniela: {
      ...texts.daniela,
      github: 'https://github.com/Amezal/daniela-portfolio',
      live: 'https://danielas-portfolio.netlify.app',
      video: Emprende,
      icons: [ReactIcon, Gatsby, WP, HTML, CSS, JS]
    },
    sorting: {
      ...texts.sorting,
      github: 'https://github.com/Amezal/amezal.github.io/tree/master/sorting-algorithms',
      live: 'https://amezal.github.io/sorting-algorithms/',
      video: Emprende,
      icons: [HTML, CSS, JS, P5]
    },
    portfolio: {
      ...texts.portfolio,
      github: 'https://github.com/Amezal/portfolio',
      live: 'https://emprende.netlify.app',
      video: Emprende,
      icons: [ReactIcon, Vite, HTML, Sass, JS]
    },
  }

  return (
    <section className='projects' id='projects'>
      <h2>{dictionary.projects.title}</h2>
      <div className="projects__list">
        {Object.keys(projects).map((project, i) => (
          <Project {...projects[project]} key={i + 1} />
        ))}
      </div>

    </section>
  )
}

export default Projects