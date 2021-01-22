import React, { useEffect } from 'react';
import './Title.css';
import Line from '../line.svg';

export default function Title(props) {
    return (
        <>
            <div id={props.id} className="title">
                {props.justification === "left" ?
                    <div className="title-flex">
                        <h1>{props.name}</h1>
                        <img src={Line} className="line"/>
                    </div>
                    :
                    <div className="title-flex">
                        <img src={Line} className="line"/>
                        <h1>{props.name}</h1>
                    </div>}
            </div>
        </>
    )
}