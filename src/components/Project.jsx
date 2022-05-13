import React from 'react';
import '../styles/Project.scss';
import { RiGithubLine, RiEyeLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Project = ({ name, description, github, live, video }) => {
  const navigate = useNavigate();

  return (
    <div className="project">
      <h3>Nombre proyectO</h3>
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
      <p>Este proyecto blablablablablablablablabla</p>
      <div className="buttons">
        <a href={live}>
          <button className="live">
            See live <RiEyeLine size="24px" />
          </button>
        </a>
        <a href={github}>
          <button className="github">
            Github repo <RiGithubLine size="24px" />
          </button>
        </a>
      </div>
    </div>
  )
}

export default Project;