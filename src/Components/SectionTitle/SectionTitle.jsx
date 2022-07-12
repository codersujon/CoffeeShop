import React from 'react'
import HeadingImg from "../../Assets/images/heading-img.png";


const SectionTitle = (props) => {
    const { title } = props;
  return (
    <div className="sectionTitle">
        <img src={HeadingImg} alt="Heding-Img" />
        <h3>{title}</h3>
    </div>
  )
}

export default SectionTitle;