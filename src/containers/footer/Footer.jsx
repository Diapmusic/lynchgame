import React from 'react';
import gpt3Logo from '../../assets/logo3.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Diamond-Studio, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Soocial Media</h4>
        <p>Twitter</p>
        <p>Discord</p>
        <p>Telegram</p>
        
      </div>
      
      <div className="gpt3__footer-links_div">
        
        <h4>LYNCH-GAME</h4>
        
        <p>company email address: support@lynch.games</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 LYNCH. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
