import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { useLanguage } from '../language/Language';
import LoadingScreen from './LoadingScreen';
import '../styles/Hero.scss';

const Hero = () => {

  const { dictionary: { home } } = useLanguage();
  const [count, setCount] = useState(0);

  const onLoad = (spline) => {
    if (window.innerWidth > 800) {
      spline.setZoom(1.2);
    }
    setCount(count + 1);
  }

  const onStart = () => {
    console.log('hola');
  }

  return (
    <>
      <LoadingScreen isVisible={count < 1} />
      <div className="hero">
        <div className="hero__content">
          <h1>Armando Meza</h1>
          <p>
            {home}
          </p>
        </div>
        <Spline scene="https://prod.spline.design/ImjjIjECdxnn2LDN/scene.splinecode"
          className='canvas'
          onLoad={onLoad}
          onStart={onStart}
        />
      </div>
    </>
  )
}

export default Hero;