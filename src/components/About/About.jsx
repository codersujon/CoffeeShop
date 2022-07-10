import React from 'react'
import AboutImg from '../../images/about-img.svg';
import SiteButton from '../Button/SiteButton';

const About = (props) => {
    const { title, text } = props;
  return (
    <section className="about">
        <div className="about__img">
            <img src={AboutImg} alt="About__img" />
        </div>
        <div className="about__content">
            <h3>{title}</h3>
            <p>{text}</p>
            <SiteButton to="/menu" className="btn" name="our menu"/>
        </div>
    </section>
  )
}

export default About;