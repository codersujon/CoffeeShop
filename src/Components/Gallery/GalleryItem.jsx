import React from 'react'

const GalleryItem = ({image}) => {
    return (
        <div className="gallery__item">
            <img src={image} alt="" />
        </div>
    )
}

export default GalleryItem