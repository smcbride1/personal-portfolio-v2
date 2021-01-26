import React, { useEffect } from 'react';
import Logo from '../logo.svg';
import LogoBackground from '../logo-background.svg';
import LogoForeground from '../logo-foreground.svg';
import AboutMe from './AboutMe';
import ProjectContainer from './ProjectContainer';
import Title from './Title';
import EducationDetailsContainer from './EducationDetailsContainer';
import './Home.css';

export default function Home() {
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            toggleTheme(true);
        } else if(localStorage.getItem('theme') === '') {
            localStorage.setItem('theme', 'light');
        } else if(localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        };
    })
    const toggleTheme = (load) => {
        console.log(!!load);
        if (!load) {
            localStorage.setItem('theme', (localStorage.getItem('theme') === 'light' ? 'dark' : 'light'));
        }
        let aArray = document.getElementsByTagName("a");
        for (let i = 0; i < aArray.length; i++) {
            aArray[i].classList.toggle("theme-dark-a");
        }
        
        let pArray = document.getElementsByTagName("p");
        for (let i = 0; i < pArray.length; i++) {
            pArray[i].classList.toggle("theme-dark-p");
        }
        
        let h1Array = document.getElementsByTagName("h1");
        for (let i = 0; i < h1Array.length; i++) {
            h1Array[i].classList.toggle("theme-dark-h1");
        }

        let h1DecorArray = document.getElementsByClassName("decor-text");
        for (let i = 0; i < h1DecorArray.length; i++) {
            h1DecorArray[i].classList.toggle("theme-dark-h1-decor-text");
        }

        let h2Array = document.getElementsByTagName("h2");
        for (let i = 0; i < h2Array.length; i++) {
            h2Array[i].classList.toggle("theme-dark-h2");
        }

        let lineArray = document.getElementsByClassName("line");
        for (let i = 0; i < lineArray.length; i++) {
            lineArray[i].classList.toggle("theme-dark-line");
        }

        document.body.classList.toggle("theme-dark-body");
    }
    return (
        <>
            <header>
                {/* <a id="logo-container" onClick={() => {toggleTheme(false)}} href="#">
                </a> */}
                <div className="logos">
                    <img src={Logo} className="header-logo"/>
                    <input type="checkbox" id="logo-container-checkbox"/>
                    <img src={LogoBackground} className="header-logo-background"/>
                    <label for="logo-container-checkbox">
                        <img src={LogoForeground} className="header-logo-foreground" onClick={() => {toggleTheme(false)}}/>
                    </label>
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