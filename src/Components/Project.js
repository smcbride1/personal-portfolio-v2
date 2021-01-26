import React from 'react';
import './Project.css';
import GitHubIcon from '../github-icon.svg';
import Carosel from './Carosel';

export default function Project(props) {
    return (
        <>
            <div className="project-flex">
                {props.direction === "0" ? 
                <>
                    <div className="project-details">
                        <div className="project-details-flex">
                            <h2 className="project-details-title">{props.name}</h2>
                            <a href={props.gitHubRepoURL} target="_blank" rel="noopener noreferrer" alt="github"><img className="github-link-icon" src={GitHubIcon}/></a>
                        </div>
                        <p className="project-details-text">{props.text}</p>
                        <p>Created with</p>
                        <div className="created-with-icon-container">{props.createdWithIcons}</div>
                    </div>
                    <div className="project-preview">
                        {props.previewType === "video" ? <iframe className="project-preview-player" src={`https://player.vimeo.com/video/${props.vimeoVideoID}?color=ffffff&portrait=0`} width="680" height="383" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> : <Carosel images={props.images}/>}
                    </div>
                </>
                :
                <>
                    <div className="project-preview">
                        {props.previewType === "video" ? <iframe className="project-preview-player" src={`https://player.vimeo.com/video/${props.vimeoVideoID}?color=ffffff&portrait=0`} width="680" height="383" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> : <Carosel images={props.images}/>}
                    </div>
                    <div className="project-details">
                        <div className="project-details-flex">
                            <h2 className="project-details-title">{props.name}</h2>
                            <a href={props.gitHubRepoURL} target="_blank" rel="noopener noreferrer" alt="github"><img className="github-link-icon" src={GitHubIcon}/></a>
                        </div>
                        <p className="project-details-text">{props.text}</p>
                        <p>Created with</p>
                        <div className="created-with-icon-container">{props.createdWithIcons}</div>
                    </div>
                </>}
            </div>
        </>
    )
}