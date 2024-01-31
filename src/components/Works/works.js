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
                        <h2> Scientific Calculator </h2>
                        <p> .MAUI app, developed with C# and XML. </p>
                    </div>
                </div>

                <div className='worksList'>
                    <img src={gymAppIcon} alt="gymAppIcon" className='worksListImg'/>
                    <div className='worksListText'>
                        <h2> Exercise Helper </h2>
                        <p> .MAUI app, developed with C# and XML. </p>
                        
                    </div>
                </div>

                <div className='worksList'>
                    <img src={jobScrapeIcon} alt="jobScrapeIcon" className='worksListImg'/>
                    <div className='worksListText'>
                        <h2> Job Site Scraper </h2>
                        <p> Developed with Python </p>
                    </div>
                </div>

                <div className='worksList'>
                    <img src={projectSiteIcon} alt="projectSiteIcon" className='worksListImg'/>
                    <div className='worksListText'>
                        <h2> Portfolio Website </h2>
                        <p> Developed with ReactJS </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Works