import React, {useState} from 'react';
import './header.css';
import { motion } from 'framer-motion/dist/framer-motion';



function Header (){
  const [show, setShow] = useState(false)
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content"> 
        <h1 className="gradient__text">We will build an RPG P2E metaverse Game for gamers and NFT addicts to play, earn and trade in a decentralized economy</h1>
        <p>Lynch is a play-to-earn game</p>
        <div className="gpt3__header-content__input">
          
        </div>
        <div className="gpt3__header-content__input"
       
        >
          <button type="button" className='dw'>Download Whitepaper</button>
        </div>
       
      </div> 
    </div>
  );
}

export default Header;
