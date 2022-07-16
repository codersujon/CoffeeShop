import React from 'react'

const FacilityItem = (props) => {
    const { image, title, text } = props;
  return (
    <div className="facility__Item">
        <img src={image} alt="Facility__Img" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default FacilityItem