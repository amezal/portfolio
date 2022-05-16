import React, { useEffect, useState } from 'react';
import '../styles/Projects.scss';
import { useLanguage } from '../language/Language';
import Project from './Project';
import { FaReact, FaSass, FaWordpress, FaGoogle, FaNode } from 'react-icons/fa';
import { SiAuth0, SiMongodb, SiVite, SiGatsby } from 'react-icons/si';
import { DiCss3, DiJavascript, DiHtml5 } from 'react-icons/di';
import { ReactComponent as P5Icon } from '../assets/P5JS.svg';

const Projects = () => {

  const [projects, setProjects] = useState(null);
  const { dictionary } = useLanguage();

  useEffect(() => {

    async function fetchData() {
      const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
      let res = await fetch(`https://cdn.contentful.com/spaces/sxn2t9too10w/environments/master/assets?access_token=${accessToken}`)
      res = await res.json();
      const links = {};

      res.items.forEach(item => {
        links[item.fields.title.toLowerCase()] = `https:${item.fields.file.url}`
      })

      const icons = {
        ReactIcon: <FaReact key='react' />,
        Sass: <FaSass key='sas' />,
        WP: <FaWordpress key='wordpress' />,
        Google: <FaGoogle key='google' />,
        Node: <FaNode key='node' />,
        Gatsby: <SiGatsby key='gatsby' />,
        Auth0: <SiAuth0 key='auth0' />,
        Mongo: <SiMongodb key='mongodb' />,
        Vite: <SiVite key='vite' />,
        CSS: <DiCss3 key='css' />,
        JS: <DiJavascript key='javascript' />,
        HTML: <DiHtml5 key='html' />,
        P5: <P5Icon key='p5.js' />
      }
      setProjects({
        greatreads: {
          title: 'greatreads',
          github: 'https://github.com/Amezal/great-reads-frontend',
          live: 'https://greatreads.site',
          video: links.greatreads,
          icons: [icons.ReactIcon, icons.Auth0, icons.Mongo, icons.HTML, icons.CSS, icons.JS, icons.Node]
        },
        emprende: {
          title: 'emprende',
          github: 'https://github.com/Amezal/emprende-website',
          live: 'https://emprende.netlify.app',
          video: links.emprende,
          icons: [icons.ReactIcon, icons.Gatsby, icons.WP, icons.Google, icons.HTML, icons.Sass, icons.JS]
        },
        daniela: {
          title: 'daniela',
          github: 'https://github.com/Amezal/daniela-portfolio',
          live: 'https://danielas-portfolio.netlify.app',
          video: links.daniela,
          icons: [icons.ReactIcon, icons.Gatsby, icons.WP, icons.HTML, icons.CSS, icons.JS]
        },
        sorting: {
          title: 'sorting',
          github: 'https://github.com/Amezal/amezal.github.io/tree/master/sorting-algorithms',
          live: 'https://amezal.github.io/sorting-algorithms/',
          video: links.sorting,
          icons: [icons.HTML, icons.CSS, icons.JS, icons.P5]
        },
        portfolio: {
          title: 'portfolio',
          github: 'https://github.com/Amezal/portfolio',
          live: 'https://emprende.netlify.app',
          video: links.portfolio,
          icons: [icons.ReactIcon, icons.Vite, icons.HTML, icons.Sass, icons.JS]
        },
      })

    }
    fetchData();
  }, [])


  return (
    <section className='projects' id='projects'>
      <h2>{dictionary.projects.title}</h2>
      {projects &&
        <div className="projects__list">
          {Object.keys(projects).map((project, i) => (
            <Project {...projects[project]} key={i + 1} i={i + 1} />
          ))}
        </div>
      }
    </section>
  )
}

export default Projects