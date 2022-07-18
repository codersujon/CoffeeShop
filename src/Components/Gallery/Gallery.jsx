import React from 'react';
import SectionTitle from './../SectionTitle/SectionTitle';
import GalleryItem from './GalleryItem';
import GalleryInfo from './../../Data/galleryInfo.json';

const Gallery = () => {
  return (
    <section className="gallery">
        <SectionTitle title="our gallery"/>

        <div className="gallery__container">
            {
                GalleryInfo.map(item=>{
                    return(
                       <GalleryItem 
                            key={item.key}
                            image="https://picsum.photos/300/200"
                       /> 
                    )
                })
            }
        </div>
        
    </section>
  )
}

export default Gallery