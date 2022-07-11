import React from 'react';


const FooterWidget = (props) => {
  const { icon, title, text1, text2 } = props;
  return (
    <div className="footer__widget">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
    </div>
  )
}

export default FooterWidget;