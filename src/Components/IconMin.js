import React from 'react';
import './IconMin.css';

export default function Icon(props) {
    return (
        <div className="icon">
            <img className="icon-min-image" src={props.image}/>
        </div>
    )
}