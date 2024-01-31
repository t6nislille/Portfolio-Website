import React from "react";
import './intro.css';

const intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className="hello"> Hello, </span> <br />
                <span className="introText"> I'm <span className="introName"> Tõnis </span> <br /> Software Developer </span>
                <p className="introPara"> "Simplicity is the soul of efficiency." </p>
                <a href="https://github.com/t6nislille" target="_blank" rel="noopener noreferrer" className="githubButton">GitHub</a>
            </div>
        <img src="" alt="" className="bg"/>
        </section>
    )
}

export default intro