import React from 'react';
import './ProjectContainer.css';
import Project from './Project';
import IconMin from './IconMin';
import ReactIcon from '../react-icon.svg';
import ReduxIcon from '../redux-icon.svg';
import RailsIcon from '../rails-icon.svg';
import PostgreSQLIcon from '../postgresql-icon.svg';
import UE4Icon from '../ue4-icon.svg';
import JavaScriptIcon from '../javascript-icon.svg';
import RubyIcon from '../ruby-icon.svg';
import PHPIcon from '../php-icon.svg';

export default function ProjectContainer() {
    const SubterfugeImages = [
        'https://i.imgur.com/j02kqpc.png',
        'https://i.imgur.com/9mWBl5s.png',
        'https://i.imgur.com/YckK55w.png',
        'https://i.imgur.com/Qy3ld1E.png',
        'https://i.imgur.com/t0d79i8.png',
        'https://i.imgur.com/PdrnyUW.png',
        'https://i.imgur.com/b4mlYKK.png'
    ]
    
    const UltimateImages = [
        'https://i.imgur.com/l9i59cN.png',
        'https://i.imgur.com/NfsJEFH.png',
        'https://i.imgur.com/vDHdxXE.png',
        'https://i.imgur.com/XbgyXnT.png',
        'https://i.imgur.com/qJWfOQS.png',
        'https://i.imgur.com/maKZ7Ij.png',
        'https://i.imgur.com/Hr6x17p.png',
        'https://i.imgur.com/TcjH6ek.png'
    ]

    const VirtualTabletopImages = [
        'https://i.imgur.com/6XUFUqd.png',
        'https://i.imgur.com/XjZwsnk.png'
    ]
    
    return (
        <>
            <div id="project-container">
                <Project name="Corkboard" text="Web app that allows users to create virtual sticky notes. React and Redux were used in the frontend, and Ruby on Rails was used as the API.
                Redux and state management was incredibly important, as there were many moving parts in terms of components being constantly created, updated, and destroyed.
                For example, whenever a note was moved to a different location on the board, a thunk action would be dispatched, and the server would recieve the request to update the note's location. " direction="1" previewType="video" vimeoVideoID="460274264" gitHubRepoURL="https://github.com/smcbride1/corkboard-frontend" createdWithIcons={
                            [<IconMin image={ReactIcon}/>,
                            <IconMin image={ReduxIcon}/>,
                            <IconMin image={RailsIcon}/>,
                            <IconMin image={PostgreSQLIcon}/>]}/>
                <Project name="Musiquiz" text="Web app used to publish and review menus and menu items. Used Ruby on Rails to create a backend API. 
Used vanilla JavaScript to create the frontend. 
Relied on fetch requests to send and receive data. 
Used JavaScript classes to store data locally before being persisted to the database. 
Used iTunes API to fetch artist’s data (artist names, song names). 
Created a gem that scraped data from billboard.com. " direction="0" previewType="video" vimeoVideoID="449365150" gitHubRepoURL="https://github.com/smcbride1/musiquiz" createdWithIcons={
                            [<IconMin image={JavaScriptIcon}/>,
                            <IconMin image={RailsIcon}/>,
                            <IconMin image={PostgreSQLIcon}/>]}/>
                <Project name="Menu Info" text="Web app used to quiz your music knowledge. Allows users to compare their score to other users. Used Ruby on Rails as the main framework. 
Added OAuth functionality, allowing users to sign in through Facebook. 
Created multiple CRUD routes that allow users to manage their own resources .
Made sure that CSRF protection was enabled. " direction="1" previewType="video" vimeoVideoID="438165561" gitHubRepoURL="https://github.com/smcbride1/menu-info" createdWithIcons={
                            [<IconMin image={RailsIcon}/>,
                            <IconMin image={PostgreSQLIcon}/>]}/>
                <Project name="Subterfuge" text="Multiplayer PVP/PVE survival horor game that pits survivors against an alien.
                The alien can either be AI controlled or player controlled, based on preference.
                The goal of the survivors is to collect and/or upload important research by making their way through the facility's maze of hallways.
                The goal of the alien is to stop the survivors. I am currently planning an adding a system where hallways and rooms will be procedurally generated." direction="0" previewType="image" images={SubterfugeImages} createdWithIcons={
                            [<IconMin className="themed-svg theme-light-svg" image={UE4Icon}/>]}/>
                <Project name="Ultimate" text="Multiplayer PVP sports game that is based around Ultimate Frisbee.
                Most of the rules follow the sport's unofficial rules, but some modifications were added for gameplay sake.
                This project was originally created with a PHP backend. This wasn't ideal, because several systems that required real-time data
                (invites, friend requests, messages, etc.) used long polling, which was slow and resource intensive. 
                I currently plan on re-writing everything using websockets." direction="1" previewType="image" images={UltimateImages} createdWithIcons={
                            [<IconMin className="themed-svg theme-light-svg" image={UE4Icon}/>,
                            <IconMin image={PHPIcon}/>]}/>
                <Project name="Virtual Tabletop" text="This project is a virtual tabletop mainly meant for Dungeons & Dragons campaigns.
                While there currently are many options out there for virtual tabletop software, most of them are 2D and top-down.
                Some features that I plan to incorporate in my project that is unique or rare include mod support/Steam Workshop support, 
                Steam platform support (invites), live real-time music synchronization and playlist support, and much more. This project is ambitious, 
                but in my mind, it is fully doable." direction="0" previewType="image" images={VirtualTabletopImages} createdWithIcons={
                            [<IconMin className="themed-svg theme-light-svg" image={UE4Icon}/>]}/>
            </div>
        </>
    )
}