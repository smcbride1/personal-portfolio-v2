import React from 'react';
import './Title.css';
import Line from '../line.svg';

export default function Title(props) {
    return (
        <>
            <div className="title-flex">
                <h1>{props.name}</h1>
                <img src={Line} className="line"/>
            </div>
        </>
    )
}