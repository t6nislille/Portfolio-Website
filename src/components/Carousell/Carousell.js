import './carousell.css';
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Project images
import calkulatorApp from '../../assets/calculatorAppIcon.png';
import gymAppIcon from '../../assets/gymAppIcon.png';
import projectSiteIcon from '../../assets/portfolioProjectIcon.png';
import jobScrapeIcon from '../../assets/webScrapePic02.png';
import ProjectHouseIcon from '../../assets/ProjectHouseIcon02.png';
import testingIcon from '../../assets/playwrightTest.png';
import positionapi from '../../assets/position-api.png';
import jupiterIcon from '../../assets/jupiter-screenshot.png';


// list of projects
const projects = [
    {
        img: positionapi,
        title: "PositionAPI",
        desc: "Simple REST API built with Flask that fetches real time flight information from Aviationstack API.",
        link: "https://github.com/t6nislille/position-api"
    },
    {
        img: jupiterIcon,
        title: "Jupiter Clone",
        desc: "A responsive Angular application that fetches data from a JSON API and displays it.",
        link: "https://github.com/t6nislille/Jupiter-Err"
    },
    {
        img: testingIcon,
        title: "Testing With Playwright",
        desc: "Automated test suite built using Playwright to validate critical functionalities.",
        link: "https://github.com/t6nislille/TestingWithPlaywright"
    },
    {
        img: jobScrapeIcon,
        title: 'Job Listing Scraper',
        desc: 'Program to gather job applications from CVkeskus.ee. Developed with Python.',
        link: 'https://github.com/t6nislille/Job-List-Scraping',
    },
    {
        img: projectSiteIcon,
        title: 'Portfolio Website',
        desc: 'Portfolio website to bring forward my skills. Developed with ReactJS.',
        link: 'https://github.com/t6nislille/Portfolio-Website',
    },
    

];

// carousell component for slider
const carousell = () => {
    return (
        <section id='carousell'>
            <h2 className='carousell-title'>My Portfolio</h2>
            <span className='carousell-desc'>Featured Projects</span>

            <Swiper
            // swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='carousell-swiper'
            >
            
            {projects.map((projects, index) => (
                <SwiperSlide key={index}>
                    <div className='project-slide'>
                        <img src={projects.img} alt={projects.title} className="slider-img"></img>
                        <div className='slider-text'>
                            <h3>{projects.title}</h3>
                            <p>{projects.desc}</p>
                            <a
                             href={projects.link}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="projectButton"
                             ></a>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
    )
};

export default carousell;