import React from 'react';
import './EducationDetailsContainer.css';
import EducationDetails from './EducationDetails';
import FlatironIcon from '../flatiron-icon.svg';
import CCRIIcon from '../ccri-icon.svg';

export default function EducationDetailsContainer(props) {
    return (
        <>
            <div id="education-details-container">
                <EducationDetails schoolName="Flatiron School" dates="2020-2020" degree="Software Engineer Certificate" icon={FlatironIcon}/>
                <EducationDetails schoolName="Community College of Rhode Island" dates="2015-2019" degree="Associates in Fine Arts" icon={CCRIIcon}/>
            </div>
        </>
    )
}