import React from 'react';
import HedingImage from '../../Assets/images/heading-img.png';

const SectionTitle = ( { title }) => {
  return (
    <div className="sectionTitle">
        <img src={HedingImage} alt="" />
        <h3>{title}</h3>
    </div>
  )
}

export default SectionTitle;