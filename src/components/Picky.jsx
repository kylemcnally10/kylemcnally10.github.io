import React, { useState, useEffect } from 'react';
import darkSkyBackground from '../static/images/darkSky.jpg';
import '../static/styles/Style.css';
import kicon from '../static/images/k-key.png';
import micon from '../static/images/m-key.png';
import headshot from '../static/images/BW-HS.png';
import leftArrow from '../static/images/leftArrow.png';
import githubImg from '../static/images/githubLogo.png';
import linkedInImg from '../static/images/linkedInLogo.png';
import resumeImg from '../static/images/resumeIcon.png';
import emailImg from '../static/images/emailIcon.png';
import { Link } from 'react-router-dom';


const Picky = (props) => {

    useEffect(() => {
        document.title = 'Kyle McNally | Picky';
    }, []);

    const images = [
        {
            name: "Dashboard",
            description:
                "After logging in, users are prompted to either start a search or join an existing room.",
            image: require("../static/images/Picky/Dashboard.png"),
        },
        {
            name: "Joining a Room",
            description:
                "If a user chooses to join an existing room, they simply have to enter the code that was automatically generated.",
            image: require("../static/images/Picky/Join.png"),
        },
        {
            name: "Search Criteria",
            description:
                "Users search for a type of food in a designated area of their choosing.",
            image: require("../static/images/Picky/WhatSoundsGood.png"),
        },
        {
            name: "Results",
            description:
                "The Yelp API returns the search results and users pick the restaurants that sound good to them.",
            image: require("../static/images/Picky/Results.png"),
        },
        {
            name: "Combined",
            description:
                "After users have made their selections, a combined results page is returned.",
            image: require("../static/images/Picky/Combined.png"),
        },
        {
            name: "Winner",
            description:
                "A random restaurant is selected from the combined results to take the hassle out of choosing.",
            image: require("../static/images/Picky/Winner.png"),
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

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
                    <div className='project-title'>Picky</div>
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
            <div className='image-list-container'>
                <div className="image-list">
                    {images.map((image, index) => (
                        <div key={index} className="image-item">
                            <div className="image-info">
                                <div className="image-name picky-name">{image.name}</div>
                                <div className='image-desc'>{image.description}</div>
                            </div>
                            <div className="image-wrapper">
                                <img src={image.image} alt={image.name} className='project-image' />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="back-projects">
                    <Link to="/projects" className="home-link">
                        <img src={leftArrow} alt="Arrow" className="arrow-icon" />
                        Back to Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Picky;
