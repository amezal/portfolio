import React from 'react';
import { useLanguage } from '../language/Language';
import '../styles/Home.scss';

const Home = () => {

  const { dictionary: { home } } = useLanguage();

  return (
    <main className="home" style={{ backgroundColor: 'black' }}>
      {[...Array(30)].map((x, i) => (
        <h1 key={i}>{i}</h1>
      ))}
      <h1>{home}</h1>
    </main>
  )
}

export default Home;