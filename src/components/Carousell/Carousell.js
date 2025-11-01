import './carousell.css';
// Import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
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
        title: "Unit Testing",
        desc: "Automated test suite built using Playwright to validate critical functionalities.",
        link: "https://github.com/t6nislille/TestingWithPlaywright"
    },
    {
        img: projectSiteIcon,
        title: 'Portfolio Website',
        desc: 'Portfolio website to bring forward my skills. Developed with ReactJS.',
        link: 'https://github.com/t6nislille/Portfolio-Website',
    },
    {
        img: jobScrapeIcon,
        title: 'Job Listing Scraper',
        desc: 'Program to gather job applications from CVkeskus.ee. Developed with Python.',
        link: 'https://github.com/t6nislille/Job-List-Scraping',
    },
    {
        img: ProjectHouseIcon,
        title: 'CRUD',
        desc: '.NET real estate CRUD with a database connection, developed with c#',
        link: "https://github.com/t6nislille/House"
    }
    
    

];

// carousell component for slider
const carousell = () => {
    return (
        <section id='carousell'>
            <h2 className='carousell-title'>My Portfolio</h2>
            <span className='carousell-desc'>Featured Projects</span>

            <Swiper
            // swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                className='carousell-swiper'
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    668: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
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
                             >GitHub</a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
    )
};

export default carousell;