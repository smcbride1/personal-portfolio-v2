import React from 'react';
import './EducationDetails.css';

export default function EducationDetails(props) {
    return (
        <>
            <div className="education-details">
                <img className="education-details-icon" src={props.icon}/>
                <div className="education-details-text">
                    <h2 className="education-details-school-name">{props.schoolName}</h2>
                    <p className="education-details-dates">{props.dates}</p>
                    <p className="education-details-degree">{props.degree}</p>
                </div>
            </div>
        </>
    )
}