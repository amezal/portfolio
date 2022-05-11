import React, { useState } from 'react';
import '../styles/LoadingScreen.scss';
import { ReactComponent as Loading } from '../assets/Loading.svg';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { useTransition, animated, config } from 'react-spring';

const LoadingScreen = ({ isVisible }) => {

  const transitions = useTransition(isVisible, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isVisible,
    config: config.molasses,
    delay: 500
  })
  return transitions(
    (styles, item) => item && <animated.div className="loading-screen" style={styles}>
      <Loading width='800px' height='800px' />
      <Logo />
    </animated.div>
  )
}

export default LoadingScreen