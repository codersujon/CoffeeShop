import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer//Footer';
import { Outlet  } from 'react-router-dom';
import Hero from '../components/Hero/Hero';

const Home = () => {
  return (
   <div>
          <Header/>
            <main>
              <Hero 
                title="coffee heaven" 
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, eum similique qui iste velit expedita mollitia? Nesciunt tempore consequatur repellendus!"
              />
            </main>
          {/* <Footer/> */}
   </div>
  )
}

export default Home;