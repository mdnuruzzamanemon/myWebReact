import React from "react";
import "../css/about.css";
import AboutAnimaiton from "./animations/AboutAnimation";

function About() {
    return (
        <div className="container" id="about">
            <div className="aboutBox">
                <div className="aboutImg">
                    {/* <img src={aboutEmonImg} alt="about" /> */}
                    <AboutAnimaiton />
                </div>
                <div className="aboutDetails">
                    <h3>About Me</h3>
                    <p>Creative and results-driven full-stack web developer with 3+ years of hands-on experience crafting fast, scalable, and user-centric applications. This portfolio highlights a diverse collection of high-impact projects—from real-time dashboards and booking platforms to full-fledged e-commerce and educational systems. Every solution is engineered with a focus on clean code, performance, and seamless user experience. As the founder of PiRhoTech, has successfully delivered 30+ full-stack projects using modern technologies like React.js, Next.js, Node.js, Express, PostgreSQL, and MongoDB.
                        Driven by curiosity, fueled by code—always building with purpose and passion.
                        Empowered by innovation and guided by user needs, every line of code aims to solve real-world problems and deliver lasting value.</p>
                </div>
            </div>
        </div>
    );
}

export default About;