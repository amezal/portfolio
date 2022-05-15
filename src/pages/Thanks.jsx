import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useLanguage } from '../language/Language';
import { FaHome } from 'react-icons/fa';
import '../styles/Thanks.scss';

const Thanks = () => {
  const { dictionary: { thanks }, userLanguage } = useLanguage();

  return (
    <main className="thanks">
      <Helmet>
        <title>{userLanguage === 'en' ?
          'Thanks' : 'Gracias'} | Armando Meza
        </title>
        <meta name="description" content={
          userLanguage === 'en' ?
            'Thanks - Armando Meza' :
            'Gracias - Armando Meza'
        } />
      </Helmet>
      <p>{thanks.text}</p>
      <Link to='/'>
        <button>
          {thanks.button} <FaHome size="24px" />
        </button>
      </Link>
    </main>
  )
}

export default Thanks;