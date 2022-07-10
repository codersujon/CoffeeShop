import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './sass/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import About from './components/About/About';
import Menu from './components//Menu/Menu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <>
   <Router>
      <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="" element={<Home/>}></Route>
          <Route path="" element={<Home/>}></Route>
      </Routes>
   </Router>
  </>

  </React.StrictMode>
);

reportWebVitals();
