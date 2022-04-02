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


function App (){
  useEffect(() =>{
    Aos.init({duration:2000, 
    });
  },[]);
 
  return(
    <div className="App" > 
     
      
          <div className="gradient__bg">

            <Navbar/>
            <div data-aos="fade-right"><Header/></div>
            <div data-aos="flip-left"><Brand /></div>
            <div data-aos="fade-right"><WhatGPT3 /></div>
            <div data-aos="flip-right"><Features /></div>
            <div data-aos="fade-down"><Possibility /></div>
            <ImageSlider slides={SliderData} />
            <div data-aos="fade-right" delay="600"><Token/></div>
            <div><TeamSection/></div>
            <div><Partner/></div>
            <div><Powered/></div>
            <div data-aos="fade-down"><CTA /></div>
            <div data-aos=""><Footer /></div>
          </div>
       
  </div>
  );
}

export default App;
