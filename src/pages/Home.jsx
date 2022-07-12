import React from 'react'
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Facility from '../Components/Facility/Facility';
import Menu from '../Components/Menu/Menu';
import Gallery from '../Components/Gallery/Gallery';
import Team from '../Components/Team/Team';
import Contact from '../Components/Contact/Contact';

const Home = () => {
  return (
   <div>
            <main>
              <Hero 
                title="coffee heaven" 
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, eum similique qui iste velit expedita mollitia? Nesciunt tempore consequatur repellendus!"
              />
              <About />
              <Facility />
              <Menu />
              <Gallery />
              <Team />
              <Contact />
            </main>
          <Footer/>
   </div>
  )
}

export default Home;