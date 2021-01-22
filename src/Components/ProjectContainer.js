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

export default function ProjectContainer(props) {
    return (
        <>
            <Project name="Corkboard" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." vimeoVideoID="496942605" gitHubRepoURL="https://github.com/smcbride1/corkboard-frontend" createdWithIcons={
                        [<IconMin image={ReactIcon}/>,
                        <IconMin image={ReduxIcon}/>,
                        <IconMin image={RailsIcon}/>,
                        <IconMin image={PostgreSQLIcon}/>]}/>
        </>
    )
}