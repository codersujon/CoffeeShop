import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import ContactImage from '../../Assets/images/contact-img.svg'


const Contact = () => {
  return (
   <section className="contact">
        <SectionTitle  title="contact us" />
        <div className="row">
            <div className="contact__img">
                <img src={ContactImage} alt="" />
            </div>
           <form action="" method="post">
                <h3>book a table</h3>
                <input type="text" name="name" id="name" className="box" required maxLength="20" placeholder="enter your name"/>
                <input type="number" name="number" className="box" required  placeholder="enter your number"/>
                <input type="number" name="guests"  className="box" required placeholder="How Many Guests"/>
                <input type="submit" value="Send Message" className="btn" name="submit"/>
           </form>
        </div>
   </section>
  )
}

export default Contact