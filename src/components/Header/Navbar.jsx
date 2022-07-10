import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Gallery</a>
        <a href="#">Team</a>
        <a href="#">Contact</a>
      </nav>

      <div className="menu-btn">
        <FontAwesomeIcon icon={faBars}>

        </FontAwesomeIcon>
      </div>
    </>
  )
}

export default Navbar;