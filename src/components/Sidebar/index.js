import React, { useState } from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/u_logo.png';
import LogoSubtile from '../../assets/images/u_sublogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={LogoSubtile} alt='slobodan ' />
      </Link>
      <nav className={isOpen ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname='active' to='/' onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname='active' className="about-link" to='/about' onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname='active' className="contact-link" to='/contact' onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className={isOpen ? 'mobile-show' : ''}>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/uzair-mnaqvi/'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.github.com/uzair110'>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='skype:live:uzairmustafa30'>
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <div className='hamburger-icon' onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} color="#ffd700" size="1x" />
      </div>
    </div>
  );
};

export default Sidebar;