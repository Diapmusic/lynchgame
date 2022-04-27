import React from 'react';
import './featuredin.css';
import Azc from './images/azc1.png';
import Daily from './images/daily.png';
import Digi from './images/digi.png';


function Featuredin() {
    
  return (
    <div class="team-section">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h1>Featured in</h1>
                </div>
            </div>
            <div class="row">
                <div class="team-items">
                    <div class="item" >
                        <img href=""  src={Azc} alt="team" className=''/>
                    </div>    
                    <div class="item">
                        <img href="" src={Daily} alt="team" className=''/>
                    </div> 
                    <div class="item">
                        <img  href="https://www.digitaljournal.com/pr/lynch-releasing-a-vr-p2e-rpg-metaverse-game-powered-by-blockchain-"src={Digi} alt="team" className=''/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}


export default Featuredin