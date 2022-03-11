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
      <motion.div className="gpt3__footer-links_div"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.8 }}
      >
        <h4>Soocial Media</h4>
        <p><a href=''>Twitter</a></p>
        <p><a href=''>Discord</a></p>
        <p><a href=''>Telegram</a></p>
        
      </motion.div>
      
      <motion.div className="gpt3__footer-links_div"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.8 }}
      >
        
        <h4>LYNCH-GAME</h4>
        
        <p>For Business Enquiries and Support Email: support@lynch.games</p>
      </motion.div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 LYNCH. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
