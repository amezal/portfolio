import React from 'react';
import '../styles/Home.scss';

const Home = () => {
  return (
    <main className="home" style={{ backgroundColor: 'black' }}>
      {[...Array(30)].map((x, i) => (
        <h1>{i}</h1>
      ))}
    </main>
  )
}

export default Home;