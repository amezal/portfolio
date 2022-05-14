import React from 'react';
import '../styles/Projects.scss';
import { useLanguage } from '../language/Language';
import Project from './Project';
import { FaReact, FaSass, FaWordpress, FaGoogle, FaNode } from 'react-icons/fa';
import { SiAuth0, SiMongodb, SiVite, SiGatsby } from 'react-icons/si';
import { DiCss3, DiJavascript, DiHtml5 } from 'react-icons/di';
import { ReactComponent as P5Icon } from '../assets/P5JS.svg';

const Projects = () => {

  const { dictionary } = useLanguage();
  const texts = dictionary.projects.list;

  const ReactIcon = <FaReact key='react' />
  const Sass = <FaSass key='sas' />
  const WP = <FaWordpress key='wordpress' />
  const Google = <FaGoogle key='google' />
  const Node = <FaNode key='node' />
  const Gatsby = <SiGatsby key='gatsby' />
  const Auth0 = <SiAuth0 key='auth0' />
  const Mongo = <SiMongodb key='mongodb' />
  const Vite = <SiVite key='vite' />
  const CSS = <DiCss3 key='css' />
  const JS = <DiJavascript key='javascript' />
  const HTML = <DiHtml5 key='html' />
  const P5 = <P5Icon key='p5.js' />

  const projects = {
    greatreads: {
      ...texts.greatreads,
      github: 'https://github.com/Amezal/great-reads-frontend',
      live: 'https://emprende.netlify.app',
      video: 'https://drive.google.com/uc?export=view&id=15IeDecdB2T6DAaB1aNbJKU_-hjDwAOUR',
      icons: [ReactIcon, Auth0, Mongo, HTML, CSS, JS, Node]
    },
    emprende: {
      ...texts.emprende,
      github: 'https://github.com/Amezal/emprende-website',
      live: 'https://emprende.netlify.app',
      video: 'https://drive.google.com/uc?export=view&id=1_jd8YeuZW3UgWYH1x_aOBVRFEUw55wgA',
      icons: [ReactIcon, Gatsby, WP, Google, HTML, Sass, JS]
    },
    daniela: {
      ...texts.daniela,
      github: 'https://github.com/Amezal/daniela-portfolio',
      live: 'https://danielas-portfolio.netlify.app',
      video: 'https://drive.google.com/uc?export=view&id=138nwWMzW2RIn07E16MVsV1I_0AfKUFCT',
      icons: [ReactIcon, Gatsby, WP, HTML, CSS, JS]
    },
    sorting: {
      ...texts.sorting,
      github: 'https://github.com/Amezal/amezal.github.io/tree/master/sorting-algorithms',
      live: 'https://amezal.github.io/sorting-algorithms/',
      video: 'https://drive.google.com/uc?export=view&id=1otsTm4iy5kCmtVR6XO4intju9JfBAmA7',
      icons: [HTML, CSS, JS, P5]
    },
    // portfolio: {
    //   ...texts.portfolio,
    //   github: 'https://github.com/Amezal/portfolio',
    //   live: 'https://emprende.netlify.app',
    //   video: 'https://drive.google.com/uc?export=view&id=138nwWMzW2RIn07E16MVsV1I_0AfKUFCT',
    //   icons: [ReactIcon, Vite, HTML, Sass, JS]
    // },
  }

  return (
    <section className='projects' id='projects'>
      <h2>{dictionary.projects.title}</h2>
      <div className="projects__list">
        {Object.keys(projects).map((project, i) => (
          <Project {...projects[project]} key={i + 1} i={i + 1} />
        ))}
      </div>

    </section>
  )
}

export default Projects