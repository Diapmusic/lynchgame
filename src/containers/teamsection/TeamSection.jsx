import React from 'react';
import Feature from '../../components/feature/Feature';
import './teamsection.css';



const featuresData = [
  {
    title: 'First Phase (Q1)',
    text: ' Team organization, Logo design, Website Design , Whitepaper ,Token and Smart Contract creation, Storyline , Basic character design  ',
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
    text: ' Lynch Dex, EEG VR game prototyping development ',
  },
];


function TeamSection() {
  return (
    <div className="gpt3__features section__padding" id="roadmap" >
      <div className="gpt3__features-container"   >
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>

    </div>
  )
}

export default TeamSection