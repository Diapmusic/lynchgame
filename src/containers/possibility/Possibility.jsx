import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import { motion } from 'framer-motion/dist/framer-motion';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="lynchMetaverse">
    <motion.div className="gpt3__possibility-image"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.8 }}
    >
      <img src={possibilityImage} alt="possibility" />
    </motion.div>
    <motion.div className="gpt3__possibility-content"
     whileHover={{ scale: 1.01 }}
     whileTap={{ scale: 0.8 }}
    >
      <h1 className="gradient__text">Lynch metaverse and VR EEG technology.</h1>
      <p>The Lynch metaverse is no different from the real world. It is a completely realistic 3D virtual world where players and creators can be a part of it. The Metaverse is the future of each players’ real world, Players can create and own their imaginary virtual spirit realm and the real world.</p>
      
    </motion.div>
  </div>
);


export default Possibility;
