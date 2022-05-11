import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spring as Burger } from 'react-burgers';
import MobileMenu from './MobileMenu';
import { RiGithubLine as Github, RiLinkedinBoxLine as Linkedin } from 'react-icons/ri'
import { useLanguage } from '../language/Language';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import '../styles/Navbar.scss';


const Navbar = () => {

  const [active, setActive] = useState(false);
  const { changeLanguage, dictionary: { nav }, userLanguage } = useLanguage();

  return (
    <>
      <header className='navbar'>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="links">
          <Link to="/">{nav.work}</Link>
          <Link to="/resume">{nav.resume}</Link>
          <Link to="/contact">{nav.contact}</Link>
        </div>

        <div className="langsocials">
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
            <a href="https://github.com/amezal"><Github size={36} /></a>
            <a href=""><Linkedin size={36} /></a>
          </div>
        </div>

        <Burger
          active={active}
          onClick={() => setActive(!active)}
          color="#FFF"
          borderRadius={5}
          width={35}
          lineHeight={4}
          lineSpacing={6}
          padding="0px"
        />
      </header>


      <MobileMenu active={active} setActive={setActive} />
    </>
  )
}

export default Navbar;