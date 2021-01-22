import React from 'react';
import Logo from '../logo.svg';
import './Home.css';

function Home() {
    return (
        <>
            <header>
                <img src={Logo} className="header-logo"/>
                <nav className="nav_links">
                    <ul>
                        <li>
                        <a href="#work">Work</a>
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
            <p>Hello World</p>
        </>
    )
}

export default Home;