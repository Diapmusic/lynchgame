import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import { motion } from 'framer-motion/dist/framer-motion';


const featuresData = [
  {
    title: 'First Phase (Q1)',
    text: ' Team organization, Logo design, Website Design , Whitepaper ,Token and Smart Contract creation, Storyline , Basic character design and Seed token sale . ',
  },
  {
    title: 'Second Phase (Q2)',
    text: ' Character and storyline completion, Private sale, Game concept design, Art production, 2D/3D art modelling',
  },
  {
    title: 'Third Phase(Q3)',
    text: ' Game trailer preview,  Game mechanics implementation, Prototyping, Public sale, Nft Marketplace and Game Development ',
  },
  {
    title: 'Fourth Phase(Q4)',
    text: 'Game Beta version, Testing and Development, Dex listing and Game launch. ',
  },
  {
    title: 'Fiveth Phase(2023)',
    text: ' Lynch Dex ',
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
        <h1 className="gradient__text">ROAD-MAP</h1>
        <p>The roadmap is subject to changes, and will be frequently updated</p>
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
