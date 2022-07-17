import React from 'react'
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Facility from '../Components/Facility/Facility';
import Menu from '../Components/Menu/Menu';
import Gallery from '../Components/Gallery/Gallery';
import Team from '../Components/Team/Team';
import Contact from '../Components/Contact/Contact';
import Footer from '../Layouts/Footer/Footer';

const Home = () => {
  return (
   <div>
        <main>
          <Hero 
            title="coffee heaven" 
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, eum similique qui iste velit expedita mollitia? Nesciunt tempore consequatur repellendus!"
          />
          <About 
            title="A cup of coffee can complete your day"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit sunt repellendus, dolorum recusandae placeat quae. Iste eaque aspernatur, animi deleniti voluptas, sunt molestias eveniet sint consectetur facere a ex."
          />
          <Facility />
          <Menu />
          <Gallery />
          <Team />
          <Contact />
        </main>
        <Footer />
   </div>
  )
}

export default Home;