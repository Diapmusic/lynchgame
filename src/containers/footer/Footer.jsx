import React from 'react';
import gpt3Logo from '../../assets/logo3.png';
import './footer.css';
import { motion } from 'framer-motion/dist/framer-motion';
const Footer = () => (
  <div className="gpt3__footer section__padding">
    <motion.div className="gpt3__footer-heading"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.8 }}
    >
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </motion.div>

    <div className="gpt3__footer-links">
      <motion.div className="gpt3__footer-links_logo"
       whileHover={{ scale: 1.01 }}
       whileTap={{ scale: 0.8 }}
      >
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Diamond-Studio, <br /> All Rights Reserved</p>
      </motion.div>
      <div className="gpt3__footer-links_div">
        <h4>Social Media</h4>
        <p><a href='https://mobile.twitter.com/game_lynch'>Twitter</a></p>
        <p><a href='https://discord.gg/xAq9HZ55b5'>Discord</a></p>
        <p><a href='https://t.me/LynchOfficial'>Telegram</a></p>
        
      </div>
      
      <div className="gpt3__footer-links_div">
        
        <h4>LYNCH-GAME</h4>
        
        <p>For Business Enquiries and Support Email: support@lynch.games</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 LYNCH. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
