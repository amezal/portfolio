import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Spline from '@splinetool/react-spline';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import './styles/Globals.scss';
import 'sanitize.css';
import { LanguageProvider } from './language/Language';

function App() {

  return (
    // <div className="App">
    //   <div>
    //     <h1>Armando Meza's Portfolio</h1>
    //   </div>
    //   <Burger
    //     active={opened}
    //     onClick={() => setOpened(!opened)}
    //     color="#000"
    //     borderRadius={5}
    //     width={40}
    //     lineHeight={4}
    //     lineSpacing={6}
    //     padding="15px"
    //   />
    //   <div className="hero">
    //     <div className="hero__content">
    //       <h1>Armando Meza</h1>
    //     </div>
    //     <Spline scene="https://draft.spline.design/GomoBm1iY0p2dn4V/scene.spline"
    //       className='canvas'
    //     />
    //   </div>
    //   <section>
    //     <h1>PROJECTS</h1>
    //   </section>
    // </div>
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resume/" element={<Resume />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  )
}

export default App;
