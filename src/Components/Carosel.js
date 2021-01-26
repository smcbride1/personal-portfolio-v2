import React, { useEffect, useState } from 'react';
import './Carosel.css';
import Arrow from '../arrow.svg';
import ImageViewerModal from './ImageViewerModal';

export default function Carosel(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageViewerModal, setImageViewerModal] = useState(<></>);

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

    const createImageViewerModal = () => {
        return setImageViewerModal(<ImageViewerModal images={props.images}/>);
    }
    
    const openInNewTab = () => {
        window.open(props.images[currentImageIndex]);
    }
    
    return (
        <>
            <div className="carosel-container" width="680px" height="383px">
                <img src={Arrow} className="carosel-arrow carosel-right-arrow" onClick={moveForward}/>
                <img src={props.images[currentImageIndex]} className="project-preview-player" onClick={openInNewTab} width="680px" height="383px"/>
                {/* {imageViewerModal} */}
                <img src={Arrow} className="carosel-arrow carosel-left-arrow" onClick={moveBackground}/>
                <p className="carosel-current-image-count">{currentImageIndex + 1}/{props.images.length}</p>
            </div>
        </>
    )
}