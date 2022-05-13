import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import '../styles/Home.scss';

const Home = () => {

  return (
    <main className="home">
      <Hero />
      <Projects />
    </main>
  )
}

export default Home;