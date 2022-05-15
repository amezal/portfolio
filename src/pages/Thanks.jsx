import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../language/Language';
import { FaHome } from 'react-icons/fa';
import '../styles/Thanks.scss';

const Thanks = () => {
  const { dictionary: { thanks } } = useLanguage();

  return (
    <main className="thanks">
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