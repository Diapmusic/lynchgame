import React from 'react';
import Feature from '../../components/feature/Feature';
import './token.css';
import { motion } from 'framer-motion/dist/framer-motion';


const featuresData = [ 
  {
    title: 'Private Sale',
    text: '15% of token will be sold in Private Sale, 10% unlock on Tge locked for 6 months after linear vesting, which is 1% daily  ',
  },
  {
    title: 'Public Sales',
    text: ' 8% of the token will be available in public Sales, 10% Tge and linear vesting of 1 % daily',
  },
  {
    title: ' In-game Rewards ',
    text: ' 35% of token will be available as in-game rewards for players',
  },
  {
    title: 'Founder Team Advisors',
    text: '12% locked For 18 months with 4 years vesting schedule ',
  },
  {
    title: ' Liquidity',
    text: ' 10% liquidity on token ',
  },
  {
    title: 'Marketing ',
    text: '  20% of token  Will be used for marketing As in case of necessity ',
  },
];

function Features (){
  
  return(
    <div className="gpt3__features section__padding" id="roadmap" 
      
    >
      <motion.div className="gpt3__features-heading"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.8 }}
      >
        <h1 className="gradient__text">TOKENOMICS</h1>
        <p></p>
      </motion.div>
      <motion.div className="gpt3__features-container"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.8 }}
      >
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </motion.div>

    </div>
  )}
  
export default Features;
