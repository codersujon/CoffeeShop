import React from 'react'
import AboutImg from '../../images/about-img.svg';
import SiteButton from '../Button/SiteButton';

const About = ({title, text}) => {
  return (
    <section className="about">
        <div className="about__img">
            <img src={AboutImg} alt="About__img" />
        </div>
        <div className="about__content">
            <h3>A cup of coffee can complete your day</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit sunt repellendus, dolorum recusandae placeat quae. Iste eaque aspernatur, animi deleniti voluptas, sunt molestias eveniet sint consectetur facere a ex.</p>
            <SiteButton to="/menu" className="btn" name="our menu"/>
        </div>
    </section>
  )
}

export default About;