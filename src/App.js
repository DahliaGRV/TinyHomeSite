import React from 'react';
import Homepage from './components/pages/Home'
import Applicances from './components/pages/Applicances'
import Community from './components/pages/Community'
import Manufacturers from './components/pages/Manufacturers'
import PhotoLibrary from './components/pages/PhotoLibrary'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

const App =() => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Homepage />}></Route>
      <Route path='/appliances'element={<Applicances />}></Route>
      <Route path='/community'element={<Community />}></Route>
      <Route path='/manufacturers'element={<Manufacturers />}></Route>
      <Route path='/photos'element={<PhotoLibrary />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
