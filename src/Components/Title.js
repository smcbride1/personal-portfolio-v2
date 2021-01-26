import React, { useEffect } from 'react';
import './Title.css';
import Line from '../line.svg';

export default function Title(props) {
    const line =
    <svg className="line" viewBox="0 0 800 1" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="800" y2="0" className="themed-svg  theme-light-svg"></line>
    </svg>

    const header =
    <h1>{props.name}</h1>
    return (
        <>
            <div id={props.id} className="title">
                {props.justification === "left" ?
                    <div className="title-flex">
                        {header}
                        {line}
                    </div>
                    :
                    <div className="title-flex">
                        {line}
                        {header}
                    </div>}
            </div>
        </>
    )
}