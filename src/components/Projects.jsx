import React, { useState, useEffect } from 'react';
import darkSkyBackground from '../static/images/darkSky.jpg';
import '../static/styles/Style.css';
import kicon from '../static/images/k-key.png';
import micon from '../static/images/m-key.png';
import headshot from '../static/images/BW-HS.png';
import githubImg from '../static/images/githubLogo.png';
import linkedInImg from '../static/images/linkedInLogo.png';
import resumeImg from '../static/images/resumeIcon.png';
import emailImg from '../static/images/emailIcon.png';
import { Link } from 'react-router-dom';


const Projects = (props) => {

    useEffect(() => {
        document.title = 'Kyle McNally | Projects';
    }, []);

    const projects = [
        {
            name: "Picky",
            language: "Python/Flask",
            display: "Picky",
            description:
                "A Full Stack Python/Flask app that allows two users to individually search for restaurants and then decide together on a place to eat with the goal of reducing time spent and frustration.",
            image: require("../static/images/Picky/FinalCroppedSlider.gif"),
            link: "https://github.com/kylemcnally10/Picky",
        },
        {
            name: "PokeMERN",
            language: "MERN",
            display: "PokeMERN",
            description:
                "A Full Stack MERN app that allows users to battle Pokemon online. This project is not deployed for Copyright purposes and was built only for educational purposes!",
            image: require("../static/images/PokeMERN.gif"),
            link: "https://kylemcnally10.github.io/Portfolio/static/media/PokeMERN.a0f48fc27a5ecec56671.gif",
        },
        {
            name: "Auction House",
            language: "C#/.NET",
            display: "AuctionHouse",
            description:
                "A Full Stack online auction app built using C#/.NET to facilitate the buying and selling of products online.",
            image: require("../static/images/AuctionHouse/DarkModeDemo.gif"),
            link: "https://github.com/SeanMcNamee86/AuctionHouse",
        },
        // {
        //     name: "NASDAQ Screener",
        //     language: "MERN",
        //     display: "NasdaqScreener",
        //     description:
        //         "A Full Stack online auction app built using C#/.NET to facilitate the buying and selling of products online.",
        //     image: require("../static/images/AHLoginRegDemo.gif"),
        //     link: "https://github.com/SeanMcNamee86/AuctionHouse",
        // },
        // {
        //     name: "Business Directory",
        //     language: "C#/.NET",
        //     display: "BusinessDirectory",
        //     description:
        //         "A Full Stack online auction app built using C#/.NET to facilitate the buying and selling of products online.",
        //     image: require("../static/images/AHLoginRegDemo.gif"),
        //     link: "https://github.com/SeanMcNamee86/AuctionHouse",
        // },
    ];

    const [selectedProject, setSelectedProject] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleProjectHover = (index) => {
        setSelectedProject(index);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="images-container">
            <div className="background-image" style={{ backgroundImage: `url(${darkSkyBackground})` }}></div>
            <div className='nav-bar'>
                <div className='icon-container'>
                    <Link to="/">
                        <div><img src={kicon} className='k-icon' alt="K Icon"></img></div>
                        <div><img src={micon} className='m-icon' alt="M Icon"></img></div>
                    </Link>
                </div>
                <div className='title-container'>
                    <div className='project-title'>My Projects</div>
                </div>
                <div className="dropdown headshot-container">
                    <img
                        className="dropdown-toggle headshot"
                        src={headshot}
                        alt="Headshot"
                        onClick={toggleDropdown}
                    />
                    {isOpen && (
                        <div className="dropdown-menu">
                            <a href="https://docs.google.com/document/d/1Bm-N0EpBwyomu-ODPKzdpmAdpImOeCv_F2m6y0_vnSA/edit?usp=sharing" target="_blank" rel="noreferrer noopener" className="dropdown-link" data-tag="resume-tag">
                                <div>Resumé</div>
                                <img src={resumeImg} alt="Resume" className="dropdown-icon" />
                            </a>
                            <a href="https://github.com/kylemcnally10" target="_blank" rel="noreferrer noopener" className="ropdown-link" data-tag="github-tag">
                                <div>GitHub</div>
                                <img src={githubImg} alt="GitHub" className="dropdown-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/kylemcnally1/" target="_blank" rel="noreferrer noopener" className="dropdown-link" data-tag="linkedin-tag">
                                <div>LinkedIn</div>
                                <img src={linkedInImg} alt="LinkedIn" className="dropdown-icon" />
                            </a>
                            <a href="mailto:kylemcnally10@gmail.com" target="_blank" rel="noreferrer noopener" className="dropwdown-link" data-tag="email-tag">
                                <div>Email</div>
                                <img src={emailImg} alt="Email" className="dropdown-icon" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className="projects-layout">
                <div className="project-preview">
                    {selectedProject !== null && (
                        <>
                            <img src={projects[selectedProject].image} alt="" className='project-image' />
                        </>
                    )}
                </div>
                <div className='projects-list-container'>
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`project-item ${selectedProject === index ? 'selected' : ''}`}
                                onMouseEnter={() => handleProjectHover(index)}
                                onMouseLeave={() => handleProjectHover(null)}
                            >
                                <Link to={`/${project.display}`} className='project-line'>
                                    <h2 className='project-name'>{project.name}</h2>
                                    <h6 className='project-language'>{project.language}</h6>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
