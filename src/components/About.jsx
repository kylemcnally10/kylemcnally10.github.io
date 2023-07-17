import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import darkSkyBackground from '../static/images/darkSky.jpg';
import portrait from '../static/images/FullPortrait.jpg';
import kicon from '../static/images/k-key.png';
import micon from '../static/images/m-key.png';
import headshot from '../static/images/BW-HS.png';
import githubImg from '../static/images/githubLogo.png';
import linkedInImg from '../static/images/linkedInLogo.png';
import resumeImg from '../static/images/resumeIcon.png';
import emailImg from '../static/images/emailIcon.png';
import leftArrow from '../static/images/leftArrow.png';
import '../static/styles/Style.css';

const About = (props) => {

    useEffect(() => {
        document.title = 'Kyle McNally | About';
    }, []);

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
                    <div className='project-title'>About Me</div>
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
                <div className='about-content'>
                    <div className='bio-container'>
                        {/* <div className="bio-title">About Me</div> */}
                        <p className="bio">
                            Until this past year, my entire life has been basketball. I played all four years at the collegiate level and then spent the next seven as a coach. I always had a love for the game as a player, but found passing on my knowledge and passion to the next generation as a coach even more fulfilling. Coaching and running a club taught me valuable lessons and helped me grow as a leader and a role-model, among many other things.
                        </p>
                        <p className="bio">
                            Having majored in economics at Willamette University, I always thought the finance industry was going to be where I would spend my life as a professional. Working in wealth management and operations taught me how to work in a fast-paced team environment, something I thrived in from my life experience in basketball. I collaborated daily with team members and clients alike to find powerful solutions to complex problems. While I enjoyed the time I spent in wealth management, the people I worked with, and the opportunities I had, I knew there was something that I could find more passion in.
                        </p>
                        <p className="bio">
                            Once I made the plunge into Software Development, I found a home at Coding Dojo and haven’t looked back. Throughout my time there, I honed my skills in coding, problem solving, and collaborating, etc. I learned three full stacks (Python/Flask, MERN, and C#/.NET) and created, built, and deployed projects via AWS in each of the three stacks. I look forward to continuing to learn and grow as I progress in my career.
                        </p>
                        <p className="bio">
                            I know now more than ever what I want to do in my life and I’ve never been more excited to get started on a new journey. All my experiences in life have led to this opportunity and I look forward to what lies next.
                        </p>
                        <p className="bio">
                            I’m currently seeking a role as a Full Stack Software Engineer so please feel free to reach out if you’d like to connect!
                        </p>
                    </div>
                    <div className='portrait-container'>
                        <img src={portrait} alt="Portrait" className="profile-image" />
                    </div>
                </div>
                <div className="back-home">
                    <Link to="/" className="home-link">
                        <img src={leftArrow} alt="Arrow" className="arrow-icon" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
