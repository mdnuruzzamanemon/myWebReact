import React from "react";
import { Link } from "react-router-dom";
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
      <div className="container menuMid">
        <div className="mainMenu">
          <ul>
            <li>
              <Link to="/facebook">
                <span><FontAwesomeIcon icon={faFacebook} /></span>
                Facebook
              </Link>
            </li>
            <li>
              <Link to="/email">
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                Email
              </Link>
            </li>
            <li>
              <Link to="/linkedin">
                <span><FontAwesomeIcon icon={faLinkedin} /></span>
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="/github">
                <span><FontAwesomeIcon icon={faGithub} /></span>
                GitHub
              </Link>
            </li>
            <li>
              <Link to="/phone">
                <span><FontAwesomeIcon icon={faPhone} /></span>
                Phone
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SocialNav;
