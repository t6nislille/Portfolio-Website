import React from 'react';
import './skills.css';
import frontEndIcon from '../../assets/frontEndIcon.png'
import backEndIcon from '../../assets/backendDevIcon.png'
import dataBaseIcon from '../../assets/databaseIcon.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'> What can i do </span>
            <span className='skillDesc'> I am a driven software developer. </span>
            <div className='skillBars'>

                <div className='skillBar'>
                    <img src={frontEndIcon} alt="frontEndIcon" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web Development</h2>
                        <p>HTML, CSS, and JavaScript for building and styling web pages.
                        Front-end frameworks/libraries like React, Angular, or Vue.js.
                        Understanding of responsive design principles for creating mobile-friendly websites.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={backEndIcon} alt="backEndIcon" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Back-End Development</h2>
                        <p>Server-side scripting languages like Node.js, Python, PHP or C#.
                        Familiarity with databases such as MySQL, PostgreSQL, or MongoDB.
                        Knowledge of server-side frameworks and APIs.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={dataBaseIcon} alt="dataBaseIcon" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Databases</h2>
                        <p>Proficiency in working with databases such as MySQL, PostgreSQL, or MongoDB.
                        Experience in designing and implementing database schemas to meet application requirements.
                        Familiarity with SQL for querying and manipulating relational databases.</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Skills;