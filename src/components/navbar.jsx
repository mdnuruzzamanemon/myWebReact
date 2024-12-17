import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileLines, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faDiagramProject, faCertificate,faBars,faXmark  } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css';

function Navbar() {

    const [smDeviceMenu, setSmDeviceMenu]=  useState({});

    const openSMDeviceMenu= ()=>
    {
        const openMode= {
            right: "0px"
        }
        setSmDeviceMenu(openMode);
    }
    const closeMblMenu= ()=>
    {
        const closeMode=
        {
            right: "-100%"
        }
        setSmDeviceMenu(closeMode);
    }



    return (
        <nav>
            <div className="container menuMid">
                <div className="logo">
                    <NavLink className="navbar-brand" to="/">
                        Emon
                    </NavLink>
                </div>
                <div className="mainMenu" style={smDeviceMenu}>
                    <button className="mblMenuCross" onClick={closeMblMenu}><FontAwesomeIcon icon={faXmark} /></button>

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

                {/* for toggle manu in small device */}
                <button onClick={openSMDeviceMenu} className="navbarToggler">
                    <FontAwesomeIcon icon={faBars} />
                </button>

            </div>
        </nav>
    );
}


export default Navbar;