import React from 'react';
import './Powered.css';
import Blender from './images/blender1.png';
import Maya from './images/maya2e.png';
import Multivac from './images/multivac1.png';
import Unreal from './images/unreal1.png';

function Powered() {
    
  return (
    <div class="team-section">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h1>Powered By</h1>
                </div>
            </div>
            <div class="row">
                <div class="team-items">
                    <div class="item">
                        <img src={Blender} alt="team" className='img23'/>
                    </div>    
                    <div class="item">
                        <img src={Maya} alt="team" className='maya'/>
                    </div> 
                    <div class="item">
                        <img src={Multivac} alt="team" className='multivac'/>
                    </div> 
                    <div class="item">
                        <img src={Unreal} alt="team" className='unreal'/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Powered