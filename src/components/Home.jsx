import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import darkSkyBackground from '../static/images/darkSky.jpg';
import githubImg from '../static/images/githubLogo.png';
import linkedInImg from '../static/images/linkedInLogo.png';
import resumeImg from '../static/images/resumeIcon.png';
import emailImg from '../static/images/emailIcon.png';
import rightArrow from '../static/images/rightArrow.png';
import leftArrow from '../static/images/leftArrow.png';
// import profileImage from '../static/images/profile-image.jpg';
import '../static/styles/Style.css';

const Home = () => {
    useEffect(() => {
        document.title = 'Kyle McNally | Home';

        const showDescriptor = (tagId) => {
            const descriptor = document.getElementById(tagId);
            descriptor.style.display = 'inline-block';
        };

        const hideDescriptor = (tagId) => {
            const descriptor = document.getElementById(tagId);
            descriptor.style.display = 'none';
        };

        // Clean up event listeners when component unmounts
        const linkElements = document.querySelectorAll('.link');
        linkElements.forEach((link) => {
            link.addEventListener('mouseover', () => showDescriptor(link.dataset.tag));
            link.addEventListener('mouseout', () => hideDescriptor(link.dataset.tag));
        });

        return () => {
            linkElements.forEach((link) => {
                link.removeEventListener('mouseover', () => showDescriptor(link.dataset.tag));
                link.removeEventListener('mouseout', () => hideDescriptor(link.dataset.tag));
            });
        };
    }, []);

    return (
        <div className="home-container">
            <div className="background-image" style={{ backgroundImage: `url(${darkSkyBackground})` }}></div>
            {/* <img src={profileImage} alt="Profile" className="profile-image" /> */}
            <h1 className="name">Kyle McNally</h1>
            <p className="description">An Irvine based Software Engineer and Full Stack Developer</p>
            <div className="links-row">
                <Link to="/projects" className="project-link">
                    <img src={rightArrow} alt="Arrow" className="right-arrow-icon" />
                    My Projects
                </Link>
                <Link to="/about" className="about-link">
                    About Me
                    <img src={leftArrow} alt="Arrow" className="left-arrow-icon" />
                </Link>
            </div>
            <div className="links-row">
                <a href="https://docs.google.com/document/d/1Bm-N0EpBwyomu-ODPKzdpmAdpImOeCv_F2m6y0_vnSA/edit?usp=sharing" target="_blank" rel="noreferrer noopener" className="link" data-tag="resume-tag">
                    <img src={resumeImg} alt="Resume" className="link-icon" />
                </a>
                <a href="https://github.com/kylemcnally10" target="_blank" rel="noreferrer noopener" className="link" data-tag="github-tag">
                    <img src={githubImg} alt="GitHub" className="link-icon" />
                </a>
                <a href="https://www.linkedin.com/in/kylemcnally1/" target="_blank" rel="noreferrer noopener" className="link" data-tag="linkedin-tag">
                    <img src={linkedInImg} alt="LinkedIn" className="link-icon" />
                </a>
                <a href="mailto:kylemcnally10@gmail.com" target="_blank" rel="noreferrer noopener" className="link" data-tag="email-tag">
                    <img src={emailImg} alt="Email" className="link-icon" />
                </a>
            </div>
            <div className="descriptor-row">
                <span id="resume-tag" className="descriptor-tag">Resumé</span>
                <span id="github-tag" className="descriptor-tag">GitHub</span>
                <span id="linkedin-tag" className="descriptor-tag">LinkedIn</span>
                <span id="email-tag" className="descriptor-tag">Email</span>
            </div>
        </div>
    );
};

export default Home;
