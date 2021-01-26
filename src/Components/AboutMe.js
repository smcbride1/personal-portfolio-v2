import React from 'react';
import './AboutMe.css';
import Icon from './Icon.js'
import ReactIcon from '../react-icon.svg';
import ReduxIcon from '../redux-icon.svg';
import RailsIcon from '../rails-icon.svg';
import PostgreSQLIcon from '../postgresql-icon.svg';
import UE4Icon from '../ue4-icon.svg';
import JavaScriptIcon from '../javascript-icon.svg';
import RubyIcon from '../ruby-icon.svg';
import MailIcon from '../mail-icon.svg';
import PhoneIcon from '../phone-icon.svg';
import LinkedInIcon from '../linkedin-icon.svg';

export default function AboutMe() {
    return (
        <>
            <div id="about-me-flex">
                <div id="about-me-details">
                    <h1>Hi, I'm</h1>
                    <h1 className="decor-text">Stephen</h1>
                    <p>I'm a Software Engineer that has experience developing web applications, and specialize in Ruby on Rails and React/Redux. I also have a passion for designing and developing games, and use Unreal Engine 4 as my engine of choice.</p>
                    <p>I recently graduated from Flatiron School's online Software Engineering program, and am currently looking for employment in the Web Development or Game Development field.</p>
                    <p>I'd love to hear from you, let's get a conversation going!</p>
                    <a href="mailto:stevemcbride3@gmail.com">
                        <img className="contact-icon themed-svg theme-light-svg" src={MailIcon} alt="email"/>
                    </a>
                    <a href="tel:401-400-1749">
                        <img className="contact-icon themed-svg theme-light-svg" src={PhoneIcon} alt="phone"/>
                    </a>
                    <a href="https://www.linkedin.com/in/stephenjmcbride/" target="_blank" rel="noopener noreferrer">
                        <img className="contact-icon themed-svg theme-light-svg" src={LinkedInIcon} alt="linkedin"/>
                    </a>
                </div>
                <div id="skills">
                    <h2 className="skills-header">Skills</h2>
                    <p>I have experience developing with</p>
                    <div className="skills-icon-container">
                        <Icon image={ReactIcon} name="REACT"/>
                        <Icon image={ReduxIcon} name="REDUX"/>
                        <Icon image={RailsIcon} name="RAILS"/>
                        <Icon image={PostgreSQLIcon} name="PGSQL"/>
                        <Icon image={UE4Icon} className="themed-svg theme-light-svg" name="UE4"/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>The languages I specialize in are</p>
                    <div className="skills-icon-container">
                        <Icon image={JavaScriptIcon} name="JAVASCRIPT"/>
                        <Icon image={RubyIcon} name="RUBY"/>
                    </div>
                </div>
            </div>
        </>
    )
}