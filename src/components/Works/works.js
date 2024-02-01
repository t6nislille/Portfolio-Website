import React from 'react'
import './works.css';
import calkulatorApp from '../../assets/calculatorAppIcon.png';
import gymAppIcon from '../../assets/gymAppIcon.png'
import projectSiteIcon from '../../assets/portfolioProjectIcon.png'
import jobScrapeIcon from '../../assets/webScrapePic02.png'
import ProjectHouseIcon from '../../assets/ProjectHouseIcon02.png'

const Works = () => {
    return (
        <section id='works'>  
            <h2 className='worksTitle'> My Portfolio</h2>
            <span className='worksDescription'>Featured projects!</span>
            <div className='worksLists'>

                 <div className='worksList'>
                    <div className='worksContent'>
                        <img src={calkulatorApp} alt="calkulatorApp" className='worksListImg'/>
                        <div className='worksDescription'>
                            <p> .NET MAUI Calculator app <br></br> Developed with: C# and XML </p>
                        </div>
                    </div>
                    <a href="https://github.com/t6nislille" target="_blank" rel="noopener noreferrer" className="projectButton">Github</a>
                </div>

                <div className='worksList'>
                    <div className='worksContent'>
                        <img src={gymAppIcon} alt="gymAppIcon" className='worksListImg'/>
                        <div className='worksDescription'>
                            <p> .NET MAUI Exercise app, to help beginners use correct forms while working out.<br></br> Developed with C# and XML. </p>     
                        </div>                   
                    </div>
                    <a href="https://github.com/t6nislille/ProjectSsentifGenie" target="_blank" rel="noopener noreferrer" className="projectButton">Github</a>
                </div>

                <div className='worksList'>
                    <div className='worksContent'>
                        <img src={jobScrapeIcon} alt="jobScrapeIcon" className='worksListImg'/>
                        <div className='worksDescription'>
                            <p>Program to gather job applications from CVkeskus.ee <br></br> Developed with Python </p>
                        </div>
                    </div>
                    <a href="https://github.com/t6nislille/Job-List-Scraping" target="_blank" rel="noopener noreferrer" className="projectButton">Github</a>

                </div>

                <div className='worksList'>
                    <div className='worksContent'>
                       <img src={projectSiteIcon} alt="projectSiteIcon" className='worksListImg'/>
                        <div className='worksDescription'>
                            <p> Portfolio Website to bring forward my skills and some of my projects<br></br> Developed with ReactJS </p>
                        </div>
                    </div>
                    <a href="https://github.com/t6nislille/Portfolio-Website" target="_blank" rel="noopener noreferrer" className="projectButton">Github</a>
                </div>

                <div className='worksList'>
                    <div className='worksContent'>
                        <img src={ProjectHouseIcon} alt="ProjectHouseIcon" className='worksListImg'/>
                        <div className='worksDescription'>
                            <p> .NET real estate CRUD with a database connection <br></br> Developed with C#,<br></br> Database connection with MySQL</p>
                        </div>
                        <a href="https://github.com/t6nislille/House" target="_blank" rel="noopener noreferrer" className="projectButton">Github</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Works