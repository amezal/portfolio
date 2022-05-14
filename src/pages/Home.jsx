import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { useLocation } from 'react-router-dom'
import '../styles/Home.scss';

const Home = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
    }
  }, [])

  return (
    <main className="home">
      <Hero />
      <Projects />
    </main>
  )
}

export default Home;