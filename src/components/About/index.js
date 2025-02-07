import React, { useState, useEffect } from 'react';
import './about.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <>
      <div className="container about-page">
        <div className="content-wrapper">
          <div className="text-zone">
            <h1>
              <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am a software engineer specializing in full-stack development with expertise in AI integration. My focus lies in developing scalable web applications and implementing cutting-edge AI solutions to solve complex business challenges.
            </p>
            <p>
              With proficiency in both frontend and backend technologies, coupled with hands-on experience in machine learning frameworks, I consistently deliver robust solutions that drive technological advancement and business value.
            </p>
            <div className="resume-section">
              <button className="resume-button" onClick={openResume}>
                <FontAwesomeIcon icon={faFileAlt} /> View Resume
              </button>
            </div>

            <h2>
              <AnimatedLetters 
                letterClass={letterClass}
                strArray={['S', 'k', 'i', 'l', 'l', 's']}
                idx={15}
              />
            </h2>
            <div className="skills-list">
              <div className="skill-item">
                <span className="tech-icon">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </span>
                <h3>Frontend Development</h3>
                <p>React.js, Redux, NextJS</p>
              </div>
              <div className="skill-item">
                <span className="tech-icon">
                  <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
                </span>
                <h3>Backend Development</h3>
                <p>Node.js, Express.js, MedusaJS, Firebase, Python</p>
              </div>
              <div className="skill-item">
                <span className="tech-icon">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </span>
                <h3>Tools & Databases</h3>
                <p>Git, GitHub, npm, Webpack, Docker, PostgreSQL, MySQL, Firebase, Elasticsearch</p>
              </div>
            </div>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;