import React, {useState, useRef, useEffect} from 'react';
import './header.css';
import {saveAs } from 'file-saver';
import { init } from 'ityped';





function Header (){
 
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{
      showCursor: false,
      backDelay:1500,
      strings: [ "Lynch is a play-to-earn game", " play-to-win business model" , "it  enables active players to earn rewards" ,"   sell Your rewards to other active players", " players will have full ownership of their in-game items", "In-game item can be traded for real money " ]
    }); 
  },[]);
  const [show, setShow] = useState(false)
  const saveFile = () => {
    saveAs(
      "https://github.com/Diapmusic/lynchgame/raw/master/src/assets/lynchWhitepaper.pdf", 
      "example.pdf"
    );
  };
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content"> 
        <h1 className="gradient__text">We will build an RPG P2E metaverse Game for gamers and NFT addicts to play, earn and trade in a decentralized economy</h1>
        <p><span ref={textRef} className="itypled-cursor"></span></p>
        <div className="gpt3__header-content__input">
          <button type="button" className='dw' onClick={saveFile}>Download Whitepaper</button>
        </div>
       
      </div> 
    </div>
  );
}


export default Header;
