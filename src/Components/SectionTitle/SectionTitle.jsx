import React from 'react'

const SectionTitle = ( { title }) => {
  return (
    <div className="sectionTitle">
        <img src="assets/images/heading-img.png" alt="Heding-Img" />
        <h3>{title}</h3>
    </div>
  )
}

export default SectionTitle;