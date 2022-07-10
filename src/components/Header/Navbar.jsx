import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomNavLink from './CustomNavLink';
import ROUTES from '../../routes';


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* NAVBAR LOOPING */}

        {ROUTES.map(link =>{
          return(
            <CustomNavLink key={link.key} linkTo={link.to} linkName={link.name} />
          )
        })}
      </nav>

      <div className="menu-btn">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div>
    </>
  )
}

export default Navbar;
