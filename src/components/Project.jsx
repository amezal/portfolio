import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../language/Language';
import { useSpring, animated, config } from 'react-spring';
import { RiGithubLine, RiEyeLine } from "react-icons/ri";
import { useInView } from 'react-intersection-observer';
import { FaPlay } from "react-icons/fa";

import '../styles/Project.scss';

const Project = ({ name, description, github, live, video, icons, i }) => {

  const videoRef = useRef(null);
  const { ref, inView, entry } = useInView();
  const [seen, setSeen] = useState(false);
  const { dictionary } = useLanguage();
  const buttons = dictionary.projects.buttons;

  useEffect(() => {
    if (!seen) {
      if (inView) {
        setSeen(true);
      }
    }
  }, [inView])

  const mouseOver = () => {
    videoRef.current.play();
  }
  const mouseOut = () => {
    videoRef.current.pause();
  }

  const style = useSpring({
    x: inView || seen ? 0 : 100 * (i % 2 === 0 ? 1 : -1),
    opacity: inView || seen ? 1 : 0,
    config: config.molasses,
  })

  return (
    <animated.div className="project"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      ref={ref}
      style={style}
    >
      <h3>{name}</h3>
      <div className="video">
        <div className="filter">
          <FaPlay size={32} />
        </div>
        <div className="filter2">
        </div>
        <video
          ref={videoRef}
          muted="muted"
          loop="loop"
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>
      </div>
      <p>{description}</p>
      <div className="icons">
        {
          icons &&
          icons.map(icon => icon)
        }
      </div>
      <div className="buttons">
        <a href={live}>
          <button className="live">
            {buttons.live} <RiEyeLine size="24px" />
          </button>
        </a>
        <a href={github}>
          <button className="github">
            {buttons.github} <RiGithubLine size="24px" />
          </button>
        </a>
      </div>
    </animated.div>
  )
}

export default Project;