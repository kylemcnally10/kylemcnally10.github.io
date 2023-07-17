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


const AuctionHouse = (props) => {

    useEffect(() => {
        document.title = 'Kyle McNally | Auction House';
    }, []);

    const images = [
        {
            name: "Login/Registration",
            description:
                "Interactive Login and Registration page for an enhanced user experience",
            image: require("../static/images/AuctionHouse/LoginRegDemoNew.gif"),
        },
        {
            name: "Home Page",
            description:
                "A carousel of featured auctions is automatically generated.",
            image: require("../static/images/AuctionHouse/HomeLight.png"),
        },
        {
            name: "User Dashboard",
            description:
                "Users are able to see their listed auctions and auctions where they are actively bidding.",
            image: require("../static/images/AuctionHouse/UserDashboard.png"),
        },
        {
            name: "Creating an Auction",
            description:
                "Users easily enter product information for quick and effortless uploads.",
            image: require("../static/images/AuctionHouse/CreateAuction.png"),
        },
        {
            name: "Viewing an Auction",
            description:
                "Users are able to see all information for an auction, including minimum bid price.",
            image: require("../static/images/AuctionHouse/OneAuction.png"),
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
                    <div className='project-title'>Auction House</div>
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
                                <div className="image-name ah-name">{image.name}</div>
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

export default AuctionHouse;
