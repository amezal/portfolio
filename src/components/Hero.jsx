import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import LoadingScreen from './LoadingScreen';
import '../styles/Hero.scss';

const Hero = () => {

  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (count > 1) {
  //     setLoaded(true);
  //   }
  //   // setLoaded(true);
  // }, [count])

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