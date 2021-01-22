import React from 'react';
import './Project.css';
import GitHubIcon from '../github-icon.svg';

export default function Project(props) {
    return (
        <>
            <div className="project-flex">
                <div className="project-details">
                    <div className="project-details-flex">
                        <h1 className="project-details-title">{props.name}</h1>
                        <a href={props.gitHubRepoURL} target="_blank" rel="noopener noreferrer" alt="github"><img className="github-link-icon" src={GitHubIcon}/></a>
                    </div>
                    <p className="project-details-text">{props.text}</p>
                    <h2>Created with</h2>
                    <div className="created-with-icon-container">{props.createdWithIcons}</div>
                </div>
                <div className="project-preview">
                    <iframe className="project-preview-player" src={`https://player.vimeo.com/video/${props.vimeoVideoID}?color=ffffff&portrait=0`} width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}