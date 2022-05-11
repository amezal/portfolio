import React from 'react';
import { useLanguage } from '../language/Language';
import Hero from '../components/Hero';
import '../styles/Home.scss';

const Home = () => {

  const { dictionary: { home } } = useLanguage();

  return (
    <main className="home">
      <Hero />
      <section>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
        <h1>PROJECTS</h1>
      </section>
    </main>
  )
}

export default Home;