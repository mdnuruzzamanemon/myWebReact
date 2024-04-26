import React from "react";
import aboutEmonImg from "../images/emon.png";
import "../css/about.css";

function About()
{
    return(
        <div className="container">
            <div className="aboutBox">
                <div className="aboutImg">
                    <img src={aboutEmonImg} alt="about" />
                </div>
                <div className="aboutDetails">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae commodi fuga dolore possimus aperiam praesentium pariatur necessitatibus blanditiis voluptatum deserunt ipsam, quia labore soluta libero hic cumque tempora dicta exercitationem suscipit modi temporibus magni! Error non porro rerum debitis! Distinctio tenetur quisquam eos voluptas ratione amet sapiente voluptatibus quasi dignissimos facilis pariatur iste libero, ullam adipisci natus maxime rerum est minima iusto officiis, quas velit. Praesentium commodi, doloribus fugit iusto itaque ratione. Nemo impedit aliquam dolorem inventore, deserunt consequatur quae obcaecati! Assumenda, ipsa laboriosam quasi totam blanditiis rem! Recusandae quas culpa quis dolore facere minima quo sed ex officiis.</p>
                </div>
            </div>
        </div>
    );
}

export default About;