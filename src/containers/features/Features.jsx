import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import { motion } from 'framer-motion/dist/framer-motion';


const featuresData = [
  {
    title: 'First Phase (Q1)',
    text: ' Team organization, Logo design Website, launch Whitepaper ,Token and smart contract creation, Storyline , basic character design and Seed token sale phase. ',
  },
  {
    title: 'Second Phase (Q2)',
    text: ' Character and storyline completion, Private sale, Game concept design, art production, 2D/3D art modelling',
  },
  {
    title: 'Third Phase(Q3)',
    text: ' Game trailer preview,  Game mechanics implementation, Prototyping, Public sale, Nfts marketplace and game development ',
  },
  {
    title: 'Fourth Phase(Q4)',
    text: ' Beta version, Testing and development, Public sale, Dex listing and Game launch. ',
  },
  {
    title: 'Fiveth Phase(2023)',
    text: ' Lynch Dex ',
  },
];

function Features (){
  
  return(
    <div className="gpt3__features section__padding" id="features" 
      
    >
      <motion.div className="gpt3__features-heading"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.8 }}
      >
        <h1 className="gradient__text">ROAD-MAP</h1>
        <p>The roadmap is subject to change, and will be frequently updated</p>
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
