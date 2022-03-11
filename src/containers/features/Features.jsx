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
    text: ' Character and storyline completion, Game concept design, art production, 2D/3D art modelling',
  },
  {
    title: 'Third Phase(Q3)',
    text: ' Game trailer preview, Private sale, Game mechanics implementation, Prototyping, Public sale, Nfts marketplace and game development ',
  },
  {
    title: 'Fourth Phase(Q4)',
    text: ' Beta version, Testing and development, Public sale, Dex listing and Game launch. ',
  },
];

function Features (){
  
  return(
    <motion.div className="gpt3__features section__padding" id="features" 
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
    >
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">ROAD-MAP</h1>
        <p>The roadmap is subject to change, and will be frequently updated</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>

    </motion.div>
  )}
  
export default Features;
