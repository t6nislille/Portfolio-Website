import React from 'react'
import './works.css';
import calkulatorApp from '../../assets/calculatorAppIcon.png';
import gymAppIcon from '../../assets/gymAppIcon.png'
import projectSiteIcon from '../../assets/portfolioProjectIcon.png'
import jobScrapeIcon from '../../assets/JobScrapeIcon.png'

const Works = () => {
    return (
        <section id='works'>  
            <h2 className='worksTitle'> My Portfolio</h2>
            <span className='worksDesc'>Featured projects!</span>
            <div className='worksLists'>

                 <div className='worksList'>
                    <img src={calkulatorApp} alt="calkulatorApp" className='worksListImg'/>
                    <div className='worksListText'>
                    <h2><a href='https://github.com/t6nislille/ScientificCalculator' target='_blank' rel='noopener noreferrer'>Scientific Calculator</a></h2>
                        <p> .MAUI app, developed with C# and XML. </p>
                    </div>
                </div>

                <div className='worksList'>
                    <img src={gymAppIcon} alt="gymAppIcon" className='worksListImg'/>
                    <div className='worksListText'>
                    <h2><a href='https://github.com/t6nislille/ProjectSsentifGenie' target='_blank' rel='noopener noreferrer'>Gym Helper</a></h2>
                        <p> .MAUI app, developed with C# and XML. </p>
                        
                    </div>
                </div>

                <div className='worksList'>
                    <img src={jobScrapeIcon} alt="jobScrapeIcon" className='worksListImg'/>
                    <div className='worksListText'>
                    <h2><a href='https://github.com/t6nislille/Job-List-Scraping' target='_blank' rel='noopener noreferrer'>Job Site Scraper</a></h2>
                        <p> Developed with Python </p>
                    </div>
                </div>

                <div className='worksList'>
                    <img src={projectSiteIcon} alt="projectSiteIcon" className='worksListImg'/>
                    <div className='worksListText'>
                    <h2><a href='https://github.com/t6nislille/Job-List-Scraping' target='_blank' rel='noopener noreferrer'>Portfolio Website</a></h2>
                        <p> Developed with ReactJS </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Works