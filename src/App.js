import './components/style.css'
import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import AboutUs from './components/AboutUs';
import WhatWeHaveDone from './components/WhatWeHaveDone';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import OurServices from './components/OurServices';
import sun from './components/images/sun.png'
import moon from './components/images/moon.png'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './components/Newdance';
 

    
 
 
 
 
function App() {


   {/* --light & dark theme function made here to use everywhere--*/ }
 
   const [theme, setTheme] = useState('light')
   const [img, setImg] = useState(sun)
   

   const toggleMode = () => {
      if (theme === 'light') {
         setTheme('dark');
         document.body.style.background = "#0C073E";
         document.querySelector('.navbar').style.background="#0C073E";
         setImg(moon)
         
         
          
      }
      else {
         setTheme('light');
         document.body.style.background = "#fff";
        document.querySelector('.navbar').style.background="#fff";
         
         setImg(sun)
        
        
      }

   }
   return (
      <>
       
         {/* --navbar-section--*/}
         <Navbar  theme={theme} toggleMode={toggleMode} />


         {/* --hero-section--*/}
      
         
         <Herosection   img={img} theme={theme} toggleMode={toggleMode} />
      


         {/* --about-us-aection--*/}
         <AboutUs   theme={theme} toggleMode={toggleMode} />

         {/* --our-services-section--*/}
         <OurServices theme={theme} toggleMode={toggleMode} />


         {/* --what-we-have-done-section--*/}
         <WhatWeHaveDone theme={theme} toggleMode={toggleMode} />


         {/* --testimonials-section--*/}
         <Testimonials theme={theme} toggleMode={toggleMode} />


         {/* --footer-section--*/}
         <Footer theme={theme} toggleMode={toggleMode} /> 
          


      </>
   );
}

export default App;
