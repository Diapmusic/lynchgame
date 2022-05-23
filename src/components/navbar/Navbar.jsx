import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/lynch.png';
import './navbar.css';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const Changebg = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    }else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', Changebg);


  return (
    
      <div className={navbar ? 'gpt3__navbar active' : 'gpt3__navbar'} >
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo}  alt="logo" href="/Home"/>
          </div>
          <div className="gpt3__navbar-links_container">
            <p><a href="/">Home</a></p>
            <p><a href="#lynchGames">Lynch Game</a></p>
            <p ><a href='/presale'>Presale</a></p>
            <p><a href="#roadmap">Roadmap</a></p>
            <p><a href="#lynchMetaverse">Lynch Metaverse</a></p>
            <p><a href="#contributor">Contributors</a></p>
          </div>
        </div>
        
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#">Home</a></p>
              <p><a href="#lynchGames">Lynch Game</a></p>
              <p ><a href='/presale'>Presale</a></p>
              <p><a href="#roadmap">Roadmap</a></p>
              <p><a href="#lynchMetaverse">Lynch Metaverse</a></p>
              <p><a href="#contributor">Contributors</a></p>
            </div>
            
          </div>
          )}
        </div>
      </div>

  );
};

export default Navbar;
