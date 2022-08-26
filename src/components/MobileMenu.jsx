import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { RiGithubLine as Github, RiLinkedinBoxLine as Linkedin } from 'react-icons/ri'
import { useLanguage } from '../language/Language';
import '../styles/MobileMenu.scss';

const MobileMenu = ({ active }) => {

  const { changeLanguage, dictionary: { nav }, userLanguage } = useLanguage();

  const goToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const props = useSpring({
    right: active ? 0 : -window.innerWidth,
    opacity: active ? 1 : 0,
  })
  return (
    <animated.nav className='mobile-menu' style={props}>
      <div className="links">
        <Link to="/#projects" onClick={goToProjects}>{nav.work}</Link>
        <a target="_blank" rel="noreferrer" href={`/Armando Meza - ${userLanguage.toUpperCase()}.pdf`}>{nav.resume}</a>
        <Link to="/contact">{nav.contact}</Link>
      </div>
      <div className="language-socials">
        <div className="language">
          <button
            onClick={() => changeLanguage('en')}
            className={userLanguage === 'en' ? 'active' : ''}
          >
            EN
          </button>
          |
          <button
            onClick={() => changeLanguage('es')}
            className={userLanguage === 'es' ? 'active' : ''}
          >
            ES
          </button>
        </div>
        <div className="socials">
          <a href="https://github.com/amezal"><Github size={42} /></a>
          <a href="https://www.linkedin.com/in/armando-meza"><Linkedin size={42} /></a>
        </div>
      </div>
    </animated.nav>
  )
}

export default MobileMenu