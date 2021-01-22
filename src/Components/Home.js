import React from 'react';
import Logo from '../logo.svg';
import LogoBackground from '../logo-background.svg';
import LogoForeground from '../logo-foreground.svg';
import AboutMe from './AboutMe';
import ProjectContainer from './ProjectContainer';
import Title from './Title';
import EducationDetailsContainer from './EducationDetailsContainer';
import './Home.css';

export default function Home() {
    return (
        <>
            <header>
                <div className="logos">
                    <img src={Logo} className="header-logo"/>
                    <img src={LogoBackground} className="header-logo-background"/>
                    <img src={LogoForeground} className="header-logo-foreground"/>
                </div>
                <nav className="nav_links">
                    <ul>
                        <li>
                        <a href="#projects">Projects</a>
                        </li>
                        <li>
                        <a href="#skills">Skills</a>
                        </li>
                        <li>
                        <a href="#education">Education</a>
                        </li>
                        <li>
                        <a href="#resume">Resume</a>
                        </li>
                        <li>
                        <a href="#contact">Contact</a>
                        </li>
                        <li>
                        <a href="https://medium.com/@stephenmcbride" target="_blank">Blog</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div id="main">
                <AboutMe/>
                <br/>
                <br/>
                <Title name="Projects" justification="left" id="projects"/>
                <ProjectContainer/>
                <Title name="Education" justification="right" id="education"/>
                <EducationDetailsContainer/>
                <Title name="Resume" justification="left" id="resume"/>
                <div id="resume-container">
                    <iframe id="resume-iframe" src="https://docs.google.com/document/d/e/2PACX-1vS1GJflYix6zYITl-z1nG6TVPqh8ctP2qoN6XFzZZV6cUkFFMrVucK1pL01YcpQEDLEjcgUNu7yq7eZ/pub?embedded=true"></iframe>
                </div>
            </div>
        </>
    )
}