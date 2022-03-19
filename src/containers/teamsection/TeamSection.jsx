import React from 'react';

import './teamsection.css';


function TeamSection() {
  return (
    <div class="main-container" id='contributor'>
  <div class="heading">
    <h1 class="heading__title"></h1>
    <p class="heading__credits"><a class="heading__link" target="_blank" href="https://dribbble.com/sl">Team </a></p>
  </div>
  <div class="cards">
    <div class="card card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">Michael Vendetta</h2>
      <p class="card__apply">
        <a class="card__link">CEO </a>
      </p>
    </div>
    <div class="card card-2">
      <div class="card__icon"> <i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">Bohdan</h2>
      <p class="card__apply">
        <a class="card__link" > Game Advisor </a>
      </p>
      
    </div>
    <div class="card card-3">
      <div class="card__icon">Paolo Jeff<i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title"></h2>
      <p class="card__apply">
        <a class="card__link" >Character Designer</a>
      </p>
    </div>
    <div class="card card-4">
      <div class="card__icon">Diamond Studio<i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title"></h2>
      <p class="card__apply">
        <a class="card__link" >Lead Game Development Team</a>
      </p>
    </div>
  
  </div>
</div>
  )
}

export default TeamSection