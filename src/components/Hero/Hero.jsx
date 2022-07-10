import React from 'react'
import SiteButton from '../Button/SiteButton';

const Hero = (props) => {
    const {title, text} = props;
    return (
        <div className="hero-bg">
            <section className="hero" id="hero">
                <div className="hero__content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <SiteButton to="/home" name="about us" className="btn"/>
                </div>
            </section>
        </div>
    )
}

export default Hero;