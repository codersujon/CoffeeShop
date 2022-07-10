import React from 'react'

const SiteButton = (props) => {
    // Site Button DeStructuring
    const { to, name, className } = props;
    return (
        <a href={to} className={className}>{name}</a>
    )
}

export default SiteButton;