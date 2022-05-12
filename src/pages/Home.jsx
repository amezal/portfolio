import React from 'react';
import { useLanguage } from '../language/Language';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import '../styles/Home.scss';

const Home = () => {

  const { dictionary: { home } } = useLanguage();

  return (
    <main className="home">
      <Hero />
      <Projects />
    </main>
  )
}

export default Home;