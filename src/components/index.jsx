import React, {useState} from "react";
import "../css/index.css";
import Navbar from "./navbar";
import Header from "./header";
import About from "./about";
import WebApps from "./WebApps";
import AndroidApps from "./AndroidApps";
import Others from "./Others";
import Skills from "./skills";
import Certifications from "./certifications";
import Timeline from "./timeline";
import ContactForm from "./ContactForm";


function Index()
{
    const [activeTab, setActiveTab] = useState("webapps"); // Default to Web Apps tab

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
                {activeTab === "webapps" && <WebApps handleTabClick={handleTabClick} />}
                {activeTab === "android" && <AndroidApps handleTabClick={handleTabClick}/>}
                {activeTab === "others" && <Others handleTabClick={handleTabClick}/>}
                <Skills />
                <Certifications />
                <Timeline />
                <ContactForm />
               
            </div>
        </div>
    );
}


export default Index;