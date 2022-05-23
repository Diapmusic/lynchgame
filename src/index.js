import { Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Web3 from 'web3';
import App from './App';
import './index.css';


function getLibrary(provider){
    return new Web3(provider);
}

ReactDOM.render(
        <React.StrictMode>
            <Web3ReactProvider getLibrary={getLibrary}>
               
                    <App />
                
            </Web3ReactProvider>
        </React.StrictMode>, 
document.getElementById('root'));
