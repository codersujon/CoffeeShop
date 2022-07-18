import React from 'react'
import FooterWidget from './FooterWidget';
import FooterInfo from '../../Data/footerInfo.json';

const Footer = (props) => {
  return (
    <section className="footer">
      <div className="footer__container">
        {/* Footer Widget Looping */}
        {FooterInfo.map(widget => {
          return (
            <FooterWidget
              key={widget.key}
              icon={widget.icon}
              title={widget.title}
              text1={widget.text1}
              text2={widget.text2}
            />
          )
        })}

      </div>

      <div className="footer__credit">
        <p>&copy; copyright @ 2022 by <span>codersujon</span> | all rights reserved! </p>
      </div>

    </section>
  )
}

export default Footer;