import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer//Footer';
import { Outlet  } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Facility from '../components/Facility/Facility';
import Menu from '../components/Menu/Menu';
import Gallery from '../components/Gallery/Gallery';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
   <div>
          <Header/>
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
          {/* <Footer/> */}
   </div>
  )
}

export default Home;