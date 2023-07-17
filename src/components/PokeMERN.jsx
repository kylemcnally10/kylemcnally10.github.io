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


const PokeMERN = (props) => {

    useEffect(() => {
        document.title = 'Kyle McNally | PokeMERN';
    }, []);

    const images = [
        {
            name: "Full Playthrough",
            description:
                "Players select a Pokemon, moveset, and then battle with accurate type effectiveness and calculations.",
            image: require("../static/images/PokeMERN/PokeMERN2.gif"),
        },
        {
            name: "Login",
            description:
                "Simple login page with retro styling to provide an authentic user experience.",
            image: require("../static/images/PokeMERN/Login.png"),
        },
        {
            name: "Pokemon Selection",
            description:
                "Players select the Pokemon they would like to battle with.",
            image: require("../static/images/PokeMERN/MonSelect.png"),
        },
        {
            name: "Move Selection",
            description:
                "The PokeAPI returns the accurate possible moveset for each pokemon and users select up to four moves.",
            image: require("../static/images/PokeMERN/MoveSelect.png"),
        },
        {
            name: "Battle",
            description:
                "Once users have selected their pokemon and it's moveset they enter into the battle.",
            image: require("../static/images/PokeMERN/BaseGame.png"),
        },
        {
            name: "Move Animations",
            description:
                "Lightweight move animations, battle text, and active HP bars provide an interactive user experience.",
            image: require("../static/images/PokeMERN/MoveAnimation.png"),
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
                    <div className='project-title'>PokeMERN</div>
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
                                <div className="image-name poke-name">{image.name}</div>
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

export default PokeMERN;
