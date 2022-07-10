import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer//Footer';
import { Outlet  } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Facility from '../components/Facility/Facility';

const Home = () => {
  return (
   <div>
          <Header/>
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
            </main>
          {/* <Footer/> */}
   </div>
  )
}

export default Home;