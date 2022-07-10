import React from 'react'
import { NavLink } from "react-router-dom";

const CustomNavLink = (props) => {
    //Props Object Destructring
    const { linkTo, linkName } = props;
  return (
    <div>
        <NavLink to={linkTo}  className={({ isActive }) => isActive ? "active"  : undefined }>{linkName}</NavLink>
    </div>
  )
}

export default CustomNavLink;