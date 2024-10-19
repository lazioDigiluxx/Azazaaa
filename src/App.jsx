import { useState,useCallback } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home/Home';
import AboutUs from './Page/AboutUs/AboutUs';
import ParticlesComponent from './Component/Animation/Particles';
import Contact from './Page/ContactUs/Contact';
import Service from './Page/Services/Service';
import Layout from './Component/Layout/Layout';
function App() {


  return (
    <>
      <div className="App">
        <ParticlesComponent id="particles" style={{zIndex:"999", objectFit: 'cover'}} />
        <BrowserRouter>
            <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path='/About' element={<AboutUs/>}/>
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/Services' element={<Service/>} />
                </Route>

            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
