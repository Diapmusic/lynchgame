import React, {useState} from 'react';
import './header.css';

function Header (){
  const [show, setShow] = useState(false)
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">We will build an RPG Game for gamers and NFT addicts to play, earn and trade in a decentralized economy</h1>
        <p>Lynch is a play-to-earn game</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__input">
          <button type="button" className='dw'><a href='https://mkstudios.gitbook.io/lynch/' alt="broken link">Whitepaper</a></button>
        </div>
      </div> 
    </div>
  );
}

export default Header;
