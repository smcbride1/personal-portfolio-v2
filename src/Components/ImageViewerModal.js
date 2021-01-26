import React, { useEffect, useState } from 'react';
import './ImageViewerModal.css';
import Arrow from '../arrow.svg';

export default function ImageViewerModal(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // useEffect(() => {
    //     setInterval(() => {
    //         moveForward();
    //     })
    // });

    const moveForward = () => {
        if (currentImageIndex >= props.images.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    const moveBackground = () => {
        if (currentImageIndex == 0) {
            setCurrentImageIndex(props.images.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }
    
    return (
        <>
            <div className="image-viewer-modal-outer-container">
                <div className="image-viewer-modal-container" width="680px" height="383px">
                        <img src={Arrow} className="image-viewer-modal-arrow image-viewer-modal-right-arrow" onClick={moveForward}/>
                        <img src={props.images[currentImageIndex]} className="project-preview-player" width="680px" height="383px"/>
                        <img src={Arrow} className="image-viewer-modal-arrow image-viewer-modal-left-arrow" onClick={moveBackground}/>
                        <p className="image-viewer-modal-current-image-count">{currentImageIndex + 1}/{props.images.length}</p>
                    </div>
                <div className="image-viewer-modal-background"/>
            </div>
        </>
    )
}