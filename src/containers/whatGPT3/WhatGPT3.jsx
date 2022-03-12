import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import { motion } from 'framer-motion/dist/framer-motion';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="lynchGames">
    <motion.div className="gpt3__whatgpt3-feature"
     whileHover={{ scale: 1.01 }}
     whileTap={{ scale: 0.8 }}
    >
      <Feature title="What is Lynch Game" text="Lynch Is an action RPG, fantasy, multiplayer Game that enables players to build their team of Lynchers and compete in  epic adventures to earn rewards. Lynch is a play-to-earn and play-to-win business model that enables active players to earn rewards or win and sell them to other active players. Additionally, players will have full ownership of their in-game items, which they can trade for real money. Lynch will offer a single-player that will control a team of heroes." />
    </motion.div>
    <motion.div className="gpt3__whatgpt3-heading"
     whileHover={{ scale: 1.01 }}
     whileTap={{ scale: 0.8 }}
    >
      <h1 className="gradient__text">The possibilities of Lynch Game is beyond your imagination</h1>
     
    </motion.div>
    <motion.div className="gpt3__whatgpt3-container"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.8 }}
    >
      <Feature title="Play-to-earn" text="Players can earn the token by playing the game." />
      <Feature title="Minting" text="Players will spend LCH whenever they want to add a new item to the blockchain." />
      <Feature title="Purchase in-game items and voting" text="Players will spend the token to purchase, upgrade their characters, or vote on crucial game issues, etc." />
      <Feature title="LCH Sector" text="Active LCH holders (LCH sector) will be able to vote within the Lynch platform to achieve a level of secrecy and security. The LCH sector will also govern the ecosystem through Decentralized Autonomous Organization (DAO)." />
    </motion.div>
  </div>
);

export default WhatGPT3;
