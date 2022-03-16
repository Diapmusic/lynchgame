import React from 'react';
import gpt3Logo from '../../assets/logo3.png';
import './footer.css';
import { FaBeer , FaTelegram, FaTwitter, FaDiscord} from 'react-icons/fa';
const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.8 }}
    >
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        
        <p>CEO: Michael Vendetta</p>
        <p>Advisor: Bohdan</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Social Media</h4>
        <p><a href='https://mobile.twitter.com/game_lynch'>Twitter <FaTwitter/></a></p>
        <p><a href='https://discord.gg/xAq9HZ55b5'>Discord <FaDiscord/></a></p>
        <p><a href='https://t.me/LynchOfficial'>Telegram<FaTelegram/></a></p>
        
      </div>
      
      <div className="gpt3__footer-links_div">
        
        <h4>LYNCH-GAME</h4>
        
        <p>For Business Enquiries and Support Email:<a href='support@lynch.games'> support@lynch.games</a></p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 LYNCH. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
