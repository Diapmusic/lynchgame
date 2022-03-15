import React , {useState, useEffect} from 'react';
import { Footer, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import Token from './containers/token/Token';
import Aos from "aos";
import "aos/dist/aos.css";

function App (){
  useEffect(() =>{
    Aos.init({duration:3000,
    });
  },[]);
 
  return(
    <div className="App" > 
     
      
          <div className="gradient__bg">

            <Navbar/>
            <div data-aos="fade-right"><Header/></div>
            <div data-aos="flip-down"><Brand /></div>
            <div data-aos="fade-up"><WhatGPT3 /></div>
            <div data-aos="fade-left"><Features /></div>
            <div data-aos="flip-down"><Possibility /></div>
            <div data-aos="fade-right"><Token/></div>
            <div data-aos="fade-right"><CTA /></div>
            <div data-aos="fade-up"><Footer /></div>
          </div>
       
  </div>
  );
}

export default App;
