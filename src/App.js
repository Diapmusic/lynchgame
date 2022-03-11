import React , {useRef} from 'react';
import { Footer, Possibility, Features, WhatGPT3, Header} from './containers';
import { motion , useAnimationFrame} from 'framer-motion/dist/framer-motion';
import { CTA, Brand, Navbar } from './components';
import './App.css';


//import Particles from 'react-particles-js';



function App (){
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });
  return(
    <div className="App"  >
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      
      <div className="gradient__bg">
        <Navbar />
        <Header/>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Footer />
      </div>
  
  </div>
  );
}

export default App;
