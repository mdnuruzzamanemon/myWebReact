import React, {useState} from "react";
import "../css/index.css";
import Navbar from "./navbar";
import Header from "./header";
import About from "./about";
import ReactProjects from "./reactProjects";
import WebProject from "./webProject";
import AndroidProject from "./androidProjects";
import Skills from "./skills";
import Certifications from "./certifications";

function Index()
{
    const [activeTab, setActiveTab] = useState("react"); // Default to React Projects tab

    // Function to handle tab clicks
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return(
        <div className="outerBox">
            <div className="innerBox">
                <Navbar />
                <Header />
                <About />
                {activeTab === "react" && <ReactProjects handleTabClick={handleTabClick} />}
                {activeTab === "web" && <WebProject handleTabClick={handleTabClick}/>}
                {activeTab === "android" && <AndroidProject handleTabClick={handleTabClick}/>}
                <Skills />
                <Certifications />
            </div>
        </div>
    );
}


export default Index;