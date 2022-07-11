import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './Assets/sass/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './Pages/Home';
import About from './Components/About/About';
import Menu from './Components//Menu/Menu';
import Gallery from './Components/Gallery/Gallery';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <>
   <Router>
      <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="menu" element={<Menu/>}></Route>
          <Route path="gallery" element={<Gallery/>}></Route>
          <Route path="team" element={<Team/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
      </Routes>
   </Router>
  </>

  </React.StrictMode>
);

reportWebVitals();
