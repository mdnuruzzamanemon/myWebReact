import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faFileLines,faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faDiagramProject,faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css';

function Navbar()
{
    return(
        <nav>
            <div className="container menuMid">
                <div className="logo">
                    <NavLink className="navbar-brand" to="/">
                        Emon
                    </NavLink>
                </div>
                <div className="mainMenu">
                    <ul>
                        <li>
                            <NavLink to="/about">
                                <span><FontAwesomeIcon icon={faUser} /></span>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span><FontAwesomeIcon icon={faFileLines} /></span>
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span><FontAwesomeIcon icon={faDiagramProject} /></span>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span><FontAwesomeIcon icon={faCertificate} /></span>
                                Certificate
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <span><FontAwesomeIcon icon={faAddressBook} /></span>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;