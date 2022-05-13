import React from 'react';
import '../styles/Project.scss';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../language/Language';
import { RiGithubLine, RiEyeLine, RiGatsbyLine as Gatsby } from "react-icons/ri";


const Project = ({ name, description, github, live, video, icons }) => {
  const navigate = useNavigate();
  const { dictionary } = useLanguage();
  const buttons = dictionary.projects.buttons;

  return (
    <div className="project">
      <h3>{name}</h3>
      <video
        muted="muted"
        loop="loop"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>
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
    </div>
  )
}

export default Project;