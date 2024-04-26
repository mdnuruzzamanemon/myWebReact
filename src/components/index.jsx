import React from "react";
import "../css/index.css";
import Navbar from "./navbar";
import Header from "./header";
import About from "./about";
import Projects from "./projects";

function Index()
{
    return(
        <div className="outerBox">
            <div className="innerBox">
                <Navbar />
                <Header />
                <About />
                <Projects />
                
            </div>
        </div>
    );
}


export default Index;