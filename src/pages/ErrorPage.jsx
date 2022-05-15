import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useLanguage } from '../language/Language';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
  const { dictionary: { error }, userLanguage } = useLanguage();
  return (
    <main className="thanks">
      <Helmet>
        <title>{userLanguage === 'en' ?
          'Not found' : 'No encontrado'} | Armando Meza
        </title>
        <meta name="description" content={
          userLanguage === 'en' ?
            'Not found - Armando Meza' :
            'No encontrado - Armando Meza'
        } />
      </Helmet>
      <p>{error.text}</p>
      <Link to='/'>
        <button>
          {error.button} <FaHome size="24px" />
        </button>
      </Link>
    </main>
  )
}

export default ErrorPage;