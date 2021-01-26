import React from 'react';
import './Icon.css';

export default function Icon(props) {
    return (
        <div className={`${props.className} icon`}>
            <img className="icon-image" src={props.image}/>
            <p className="icon-name">{props.name}</p>
        </div>
    )
}