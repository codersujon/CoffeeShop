import React from 'react'

const MenuItem = (props) => {
    const { image, title } = props;
    return (
        <div className="menu__item">
            <img src={image} alt="" />
            <h3>{title}</h3>
        </div>
    )
}

export default MenuItem