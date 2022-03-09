import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Lynch metaverse and VR EEG technology.</h1>
      <p>The Lynch metaverse is no different from the real world. It is a completely realistic 3D virtual world where players and creators can be a part of it. The Metaverse is the future of each players’ real world, Players can create and own their imaginary virtual spirit realm and the real world.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);


export default Possibility;
