import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Layout/Header/Header';
import Home from './Pages/Home';
import About from './Components/About/About';
import Menu from './Components//Menu/Menu';
import Gallery from './Components/Gallery/Gallery';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Router>
          <Header />
          <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="about" element={<About/>} />
                <Route exact path="menu" element={<Menu/>} />
                <Route exact path="gallery" element={<Gallery/>} />
                <Route exact path="team" element={<Team/>} />
                <Route exact path="contact" element={<Contact/>} />
                
          </Routes>
      </Router>
    </>
  );
}

export default App;
