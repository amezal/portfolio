import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { RiGithubLine as Github, RiLinkedinBoxLine as Linkedin } from 'react-icons/ri'
import '../styles/MobileMenu.scss';

const MobileMenu = ({ active }) => {
  const props = useSpring({
    right: active ? 0 : -window.innerWidth,
    opacity: active ? 1 : 0,
  })
  return (
    <animated.nav className='mobile-menu' style={props}>
      <div className="links">
        <Link to="/">Work</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="language">
        <button>EN</button>
        |
        <button>ES</button>
      </div>
      <div className="socials">
        <a href="https://github.com/amezal"><Github size={42} /></a>
        <a href=""><Linkedin size={42} /></a>
      </div>
    </animated.nav>
  )
}

export default MobileMenu