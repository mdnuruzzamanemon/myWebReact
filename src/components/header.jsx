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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, illo illum dolorem nostrum, repellendus distinctio eligendi magnam vel quisquam sit, maiores itaque. Adipisci corporis alias delectus dolor perspiciatis optio illo.</p>
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