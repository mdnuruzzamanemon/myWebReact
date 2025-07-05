import React from "react";
import ProjectsFullPage from "./ProjectsFullPage";
import projectImg from "../images/emon.png";
import valluk from "../images/valluk.png";
import bdinclusive from "../images/bdinclusive.png";
import dreamssel from "../images/dreamssel.png";
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function OthersFullPage() {
    // Create projects array with all other projects
    const projects = [
        {
            title: "Agency Website",
            details: "Agency web app where all services are shown. Built with React.js and Particle.js.",
            image: projectImg,
            logo: projectImg,
            icon: faGlobe,
            link: "https://pirhotech-old-website.pirhotech.com"
        },
        {
            title: "E-Commerce Website",
            details: "An e-commerce platform where users can get fashion products. Built with HTML, CSS, Bootstrap, Laravel.",
            image: bdinclusive,
            logo: bdinclusive,
            icon: faGlobe,
            link: "https://bdinclusive.com"
        },
        {
            title: "E-Commerce website of Valluk",
            details: "Valluk is a platform where users can buy their daily needs.",
            image: valluk,
            logo: valluk,
            icon: faGlobe,
            link: "https://www.valluk.com/"
        },
        {
            title: "Portfolio Website",
            details: "A portfolio website for Dr. Molla Shahadat Hossain Lipu, showcasing his academic achievements, research, publications, and projects. Built using HTML, CSS, Bootstrap, JavaScript, Animate On Scroll (AOS), and WOW.js.",
            image: projectImg,
            logo: projectImg,
            icon: faGlobe,
            link: "https://drlipu.info"
        },
        {
            title: "Figma to HTML",
            details: "An e-commerce platform where users can get fashion products. This is mainly a clone of a Figma website design. Built with HTML, CSS, Bootstrap.",
            image: projectImg,
            logo: projectImg,
            icon: faGlobe,
            link: "https://ecommerce-figma-to-html.vercel.app"
        },
        {
            title: "Memory Map",
            details: "A Page Replacement and Memory Allocation Algorithm Visualizer built using HTML, CSS, and JavaScript. It visually demonstrates how different memory management algorithms work, helping users understand system-level concepts interactively.",
            image: projectImg,
            logo: projectImg,
            icon: faGlobe,
            link: "https://memory-map-lilac.vercel.app"
        },
        {
            title: "QR Code Generator",
            details: "A QR Code Generator Desktop App built with Electron for sharing data and files between devices. Designed with HTML and CSS, with Python and Express.js backend.",
            image: projectImg,
            logo: projectImg,
            icon: faGithub,
            link: "https://emon.pirhotech.com/projects"
        },
        {
            title: "Tic Tac Toe Game",
            details: "A console-based Tic-Tac-Toe game developed in C programming. It allows two players to play in turn, displaying the game board and results directly in the terminal.",
            image: projectImg,
            logo: projectImg,
            icon: faGithub,
            link: "https://emon.pirhotech.com/projects"
        },
        {
            title: "Mess Management App",
            details: "A console-based mess management system developed in C using linked lists. Students can update their meal count, costs, and other mess-related information.",
            image: projectImg,
            logo: projectImg,
            icon: faGithub,
            link: "https://emon.pirhotech.com/projects"
        },
        {
            title: "Dreamssel for your fashion dream",
            details: "Marketplace where users can buy products as well as distributors can also buy products as resellers",
            image: dreamssel,
            logo: dreamssel,
            icon: faGlobe,
            link: "https://www.dreamssel.com/"
        }
    ];

    return (
        <ProjectsFullPage
            title="Other Projects"
            projects={projects}
            category="others"
        />
    );
}

export default OthersFullPage; 