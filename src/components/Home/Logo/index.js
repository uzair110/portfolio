import './index.scss';
import LogoS from '../../../assets/images/u_logo.png';

import { useRef } from 'react';

export const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path d="M20,10 
           V60 
           A10,10 0 0 0 30,70 
           H70 
           A10,10 0 0 0 80,60 
           V10" 
           ref={outlineLogoRef}
            />
        </g>
      </svg>
    </div>
  );
};
 