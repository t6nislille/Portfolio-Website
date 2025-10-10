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


// list of projects
const projects = [
    {
        img: jobScrapeIcon,
        title: 'Job Listing Scraper',
        desc: 'Program to gather job applications from CVkeskus.ee. Developed with Python.',
        link: 'https://github.com/t6nislille/Job-List-Scraping',
    },
    {
        img: projectSiteIcon,
        title: 'Portfolio Website',
        desc: 'Portfolio website to bring forward my skills and projects. Developed with ReactJS.',
        link: 'https://github.com/t6nislille/Portfolio-Website',
    }

];

// carousell component for slider
const carousell = () => {
    return (
        <section id='carousell'>
            <Swiper
                pagination = {True}
            />
        </section>
    )
};

export default carousell;