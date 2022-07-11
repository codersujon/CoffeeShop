import React from 'react'
import FooterWidget from './FooterWidget';

const Footer = (props) => {
  return (
    <section className="footer">
       <div className="footer__container">
          <FooterWidget />
          <FooterWidget />
          <FooterWidget />
          <FooterWidget />
       </div>

       <div className="footer__credit">
         <p>&copy; copyright @ 2022 by <span>codersujon</span> | all rights reserved! </p>
       </div>

    </section>
  )
}

export default Footer;