import React from 'react';
import ImageSlider from './containers/gallery/ImageSlider';
import { SliderData } from './containers/gallery/SliderData';
import useCountdown from './containers/Ico/useCountdown';
import TeamSection from './containers/teamsection/TeamSection';
import Partner from './containers/partner/Partner';
import Powered from './containers/Powered/Powered';
import Featuredin from './containers/featuredin/featuredin';
import Token from './containers/token/Token';
import { Footer, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import Countdown from "./containers/Ico/useCountdown";
import Timer from './containers/Ico/Timer';


function Home() {

  
  return (
      <div className='App'>
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
        <div><Featuredin/></div>
        <div data-aos="fade-down"><CTA /></div>
        

    </div>
  );
}

export default Home