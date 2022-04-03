import React from 'react';

import './App.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Header from './Components/Header';








function App() {
  return (
    <div className="app">



      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />


        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
