import React from 'react';
import './ProjectContainer.css';
import Project from './Project';
import IconMin from './IconMin';
import ReactIcon from '../react-icon.svg';
import ReduxIcon from '../redux-icon.svg';
import RailsIcon from '../rails-icon.svg';
import PostgreSQLIcon from '../postgresql-icon.svg';
import UE4Icon from '../ue4-icon-dark.svg';
import JavaScriptIcon from '../javascript-icon.svg';
import RubyIcon from '../ruby-icon.svg';

export default function ProjectContainer() {
    return (
        <>
            <div id="project-container">
                <Project name="Corkboard" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." direction="1" vimeoVideoID="460274264" gitHubRepoURL="https://github.com/smcbride1/corkboard-frontend" createdWithIcons={
                            [<IconMin image={ReactIcon}/>,
                            <IconMin image={ReduxIcon}/>,
                            <IconMin image={RailsIcon}/>,
                            <IconMin image={PostgreSQLIcon}/>]}/>
                <Project name="Musiquiz" text="Web app used to publish and review menus and menu items. Used Ruby on Rails to create a backend API. 
Used vanilla JavaScript to create the frontend. 
Relied on fetch requests to send and receive data. 
Used JavaScript classes to store data locally before being persisted to the database. 
Used iTunes API to fetch artist’s data (artist names, song names). 
Created a gem that scraped data from billboard.com. " direction="0" vimeoVideoID="449365150" gitHubRepoURL="https://github.com/smcbride1/musiquiz" createdWithIcons={
                            [<IconMin image={JavaScriptIcon}/>,
                            <IconMin image={RailsIcon}/>,
                            <IconMin image={PostgreSQLIcon}/>]}/>
                <Project name="Menu Info" text="Web app used to quiz your music knowledge. Allows users to compare their score to other users. Used Ruby on Rails as the main framework. 
Added OAuth functionality, allowing users to sign in through Facebook. 
Created multiple CRUD routes that allow users to manage their own resources .
Made sure that CSRF protection was enabled. 
" direction="1" vimeoVideoID="438165561" gitHubRepoURL="https://github.com/smcbride1/menu-info" createdWithIcons={
                            [<IconMin image={RailsIcon}/>,
                            <IconMin image={PostgreSQLIcon}/>]}/>
            </div>
        </>
    )
}