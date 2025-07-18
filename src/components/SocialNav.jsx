import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import '../css/navbar.css';

function SocialNav() {
  return (
    <nav>
      <div className="container ">
        <div className="socialNavMenu">
          <ul>
            <li>
              <a href="https://www.facebook.com/mdnuruzzamanemon" target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faFacebook} /></span>
                
              </a>
            </li>
            <li>
              <a href="mailto:nuruzzaman@gmail.com">
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mdnuruzzamanemon" target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faLinkedin} /></span>
                
              </a>
            </li>
            <li>
              <a href="https://github.com/mdnuruzzamanemon" target="_blank" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faGithub} /></span>
                
              </a>
            </li>
            <li>
              <a href="tel:+8801703612881">
                <span><FontAwesomeIcon icon={faPhone} /></span>
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SocialNav;
