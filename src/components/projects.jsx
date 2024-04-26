import React, { useState, useEffect } from "react";
import "../css/projects.css";
import projectImg from "../images/emon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProgressBar({ progress }) {
    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

function Projects() {

    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setProgress(90);
        },100);
    },[]);


    return (
        <div className="projectsMainBox">
            <div className="container">
                <h3>Projects</h3>
                <div className="progressBox">
                    <ProgressBar progress={progress}/>
                </div>
                <div className="projectBtns">
                    <button> React Projects </button>
                    <button> Web Projects </button>
                    <button> Android Projects </button>
                </div>
                <div className="projectBox">
                    <div className="allProjects">
                        <div className="project project1">
                            <img src={projectImg} alt="project" />
                        </div>
                        <div className="project project2">
                            <img src={projectImg} alt="project" />
                        </div>
                        <div className="project project3">
                            <img src={projectImg} alt="project" /> 
                        </div>
                    </div>
                    <div className="viewProjectsBox">
                        <div className="viewProject">
                            <div className="imageBox">
                                <img src={projectImg} alt="project" /> 
                            </div>
                            <div className="contentBox">
                                <h3>This is Project title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem, similique.</p>
                                <span><FontAwesomeIcon icon={faGithub} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
