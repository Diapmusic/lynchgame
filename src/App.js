import React , {useState, useEffect} from 'react';
import { Footer, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import Token from './containers/token/Token';
import Aos from "aos";
import "aos/dist/aos.css";

function App (){
  useEffect(() =>{
    Aos.init({duration:2000, delay:600,
    });
  },[]);
 
  return(
    <div className="App" > 
     
      
          <div className="gradient__bg">

            <Navbar/>
            <div data-aos=""><Header/></div>
            <div data-aos=""><Brand /></div>
            <div data-aos=""><WhatGPT3 /></div>
            <div data-aos=""><Features /></div>
            <div data-aos=""><Possibility /></div>
            <div data-aos=""><Token/></div>
            <div data-aos=""><CTA /></div>
            <div data-aos=""><Footer /></div>
          </div>
       
  </div>
  );
}

export default App;
