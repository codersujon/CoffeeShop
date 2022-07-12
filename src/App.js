import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from './Layouts/Header/Header';
import Routers from "./Routes/Routers";


function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routers />
      </BrowserRouter>
  );
}

export default App;
