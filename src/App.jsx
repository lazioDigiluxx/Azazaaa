import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home/Home';
import AboutUs from './Page/AboutUs/AboutUs';
import ParticlesComponent from './Component/Animation/Particles';
// import Contact from './Page/ContactUs/Contact';
import Service from './Page/Services/Service';
import Layout from './Component/Layout/Layout';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (replace with your real loading logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <ParticlesComponent id="particles" style={{ zIndex: "999", objectFit: 'cover' }} />
      <BrowserRouter>
        {loading ? (
          <div style={{
            backgroundColor: 'black',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ClimbingBoxLoader

              color="red" // Set loader color to white
              loading={loading}
              size={35}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path='/About' element={<AboutUs />} />
              {/* <Route path='/Contact' element={<Contact />} /> */}
              <Route path='/Services' element={<Service />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
