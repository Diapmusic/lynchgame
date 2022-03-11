import React, {useState} from 'react';
import './header.css';
import { motion } from 'framer-motion/dist/framer-motion';



function Header (){
  const [show, setShow] = useState(false)
  return (
    <motion.div className="gpt3__header section__padding" id="home"
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
      
      
    >
    

      <div className="gpt3__header-content">
        <h1 className="gradient__text">We will build an RPG P2E metaverse Game for gamers and NFT addicts to play, earn and trade in a decentralized economy</h1>
        <p>Lynch is a play-to-earn game</p>
        <div className="gpt3__header-content__input">
          
        </div>
        <div className="gpt3__header-content__input">
          <button type="button" className='dw'><a href='https://mkstudios.gitbook.io/lynch/' alt="broken link">Whitepaper</a></button>
        </div>
       
      </div> 
    </motion.div>
  );
}

export default Header;
