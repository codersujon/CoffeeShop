import React from 'react'
import SiteButton from '../Button/SiteButton';
import AboutImage from '../../Assets/images/about-img.svg';

const About = ({title, text}) => {
  return (
    <section className="about">
        <div className="about__img">
            <img src={AboutImage} alt="" />
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