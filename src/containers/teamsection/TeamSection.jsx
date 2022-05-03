import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './teamsection.css';


function TeamSection() {
  useEffect(() =>{
    Aos.init({duration:2000, 
    });
  },[]);
  return (
    <div class="main-container" id='contributor'>
  <div class="heading">
    <h1 class="heading__title"></h1>
    <p class="heading__credits"><a class="heading__link" target="_blank" > Our Team </a></p>
  </div>
  <div class="cards">
    <div class="card card-1"  data-aos="fade-right">
      
      
      <h2 class="card__title">Michael Vendetta</h2>
      <p class="card__apply">
        <a class="card__link">Founder </a>
      </p>
    </div>
    <div class="card card-1"  data-aos="fade-up">
      
      
      <h2 class="card__title">Hassan</h2>
      <p class="card__apply">
        <a class="card__link">Co-founder</a>
      </p>
    </div>
    <div class="card card-2"  data-aos="flip-left">
     
      <h2 class="card__title">Bohdan</h2>
      <p class="card__apply">
        <a class="card__link" > Game Advisor </a>
      </p>
      
    </div>
    <div class="card card-3"  data-aos="fade-right">
      <h2 class="card__title">Paolo Jeff</h2>
      <p class="card__apply">
        <a class="card__link" >Character Designer</a>
      </p>
    </div>
    <div class="card card-4" data-aos="flip-left">
      
      <h2 class="card__title">Diamond Studio</h2>
      <p class="card__apply">
        <a class="card__link" >Lead Game Development Team</a>
      </p>
    </div>
  
  </div>
</div>
  )
}

export default TeamSection