import React from 'react';
import './partner.css';
import Pandas from './images/pandas.png';
import Log from './images/pandasdraw.png';
import multi from './images/multilogo.png';
import mul from './images/mul.png';


function Partner() {
    
  return (
    <div class="team-section">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h1>Our Partners</h1>
                </div>
            </div>
            <div class="row">
                <div class="team-items">
                    <div class="item">
                        <img src={Log} alt="team" className='img23' />
                        <div class="inner">
                            <div class="info">
                                <img src={Pandas} alt ="ite" /> 
                            </div>
                        </div>
                    </div>    
                    <div class="item">
                        <img src={mul} alt="team" className='img234' />                      
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partner