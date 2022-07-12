import React from 'react'
import Logo from '../../Assets/images/logo.png';

const logo = (props) => {
    return (
        <div className="logo">
            <a href="/">
                <img src={Logo} alt="Logo" />
            </a>
        </div>
    )
}

export default logo;