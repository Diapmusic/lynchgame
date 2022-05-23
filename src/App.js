import React , {useState, useEffect} from 'react';
import { Footer, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import Token from './containers/token/Token';
import Aos from "aos";
import "aos/dist/aos.css";
import ImageSlider from './containers/gallery/ImageSlider';
import { SliderData } from './containers/gallery/SliderData';
import TeamSection from './containers/teamsection/TeamSection';
import Partner from './containers/partner/Partner';
import Powered from './containers/Powered/Powered';
import Featuredin from './containers/featuredin/featuredin';
import Ico from './containers/Ico/ico';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App (){
  useEffect(() =>{
    Aos.init({duration:2000, 
    });
  },[]);
 
  return(
    
    <div className="App" > 
     
      
          <div className="gradient__bg">
            

            <Navbar/>
            <Router>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/presale" element={<Ico/>}/>
              
             
              </Routes>
            </Router>

            <div data-aos=""><Footer /></div>
          </div>

          </div>
       
  
  
  );
}

export default App;
