import './index.scss';
import LogoTitle from '../../assets/images/u_logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { Logo } from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
   setTimeout(() => {
      setLetterClass('text-animate-hover')}, 4000)
  }, [])

  const nameArray = ['z', 'a', 'i', 'r', ' ', 'M'];
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2>Front End / Backend / Cloud Infra</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Logo/>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
