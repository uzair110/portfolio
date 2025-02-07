import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const formRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_xv70cw3',
      'template_538v98m',
      formRef.current,
      "ofWsOg4inn7Kn5kxh"
    ).then(
      () => {
        alert('Message Sent.');
        window.location.reload();
      },
      (error) => {
        alert('Failed to send message.');
        console.log(error);
      }
    )
  };

    return (
      <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am always open to new opportunities and collaborations. Feel free to reach out to me through the form below or via email.
          </p>
         <div className='contact-form'>
          <form ref={formRef} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' placeholder='Name' name='name' required />
              </li>
              <li className='half'>
                <input 
                  type='email'
                  placeholder='Email'
                  name='email'
                  required
                />
              </li>
              <li>
                <input type='text' placeholder='Subject' name='subject' required />
              </li>
              <li>
                <textarea placeholder='Message' name='message' required></textarea>
              </li>
              <li>
                <button type='submit' className='flat-button'>SEND</button>
              </li>
            </ul>
          </form>
         </div>
        </div>
      </div>
      <Loader type="pacman" />
      </>
    )
}

export default Contact;