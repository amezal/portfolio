import React from 'react';
import { Routes, Route } from 'react-router-dom'
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
