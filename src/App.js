import React  from 'react';
<<<<<<< HEAD
import { Footer, Possibility, Features, WhatGPT3, Header} from './containers';
=======
import { Footer,  Possibility, Features, WhatGPT3, Header} from './containers';
>>>>>>> f0b9b62b16a0c402807f67fa61c980f775781998
import { CTA, Brand, Navbar } from './components';
import './App.css';


//import Particles from 'react-particles-js';



function App (){
  return(
    <div className="App"  >
      
      <div className="gradient__bg">
        <Navbar />
        <Header/>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
<<<<<<< HEAD
      
=======
>>>>>>> f0b9b62b16a0c402807f67fa61c980f775781998
        <Footer />
      </div>
  
  </div>
  );
}

export default App;
