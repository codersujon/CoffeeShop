import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,  } from '@fortawesome/free-regular-svg-icons';


const FooterWidget = (props) => {
  return (
    <div className="footer__widget">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        <h3>our email</h3>
        <p>csesujon155@gmail.com</p>
        <p>csesujon155@gmail.com</p>
    </div>
  )
}

export default FooterWidget;