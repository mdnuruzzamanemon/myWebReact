import React from "react";
import "../css/header.css";
import headerEmonImg from "../images/emon2.png";

function Header() {
    return (
        <div className="header">
            <div className="headerMid">
                <div className="headerImg">
                <img src={headerEmonImg} alt="Emon" />
                </div>
                <div className="headerContent">
                    <h4>Hey</h4>
                    <h1>This is Md Nuruzzaman Emon</h1>
                    <h4>I am a Programmer</h4>
                    <p>A passionate and dynamic full-stack developer crafting real-world, impact-driven solutions across e-commerce, edtech, and real-time platforms. Explore a showcase of intuitive, scalable applications—built with modern technologies like React, Next.js, Node.js, and PostgreSQL.</p>
                </div>
                <div className="headerBtns">
                    <button>Learn More</button>
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
    );
}

export default Header;