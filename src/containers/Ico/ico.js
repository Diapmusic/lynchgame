 import { useEffect, useState} from 'react';
import { useWeb3React } from '@web3-react/core';
import { injested } from './injested';
import swal from 'sweetalert';
import '../../components/cta/cta.css'
import '../../containers/footer/footer.css';
import {Abi} from './ico.json';
import './ico.css';

function Ico() {

    const rate = 1;

    const contract = "0x8E564C2d6bfdb16A0E89a2230F3C35a10D1FA5B0";

    const address = "0x1632710e70A93403eB1a09eA8e6eCcCB3955e160";

    const {active, account, library, connector, activate, deactivate, chainId } = useWeb3React();

    const [balance, setBalance]  = useState(0);

    const [amount , setAmount] = useState('')

    async function  getBalance(){
        try {
            let blnc = await library.eth.getBalance(account)
            blnc = await library.utils.fromWei(blnc, "ether");
            if (blnc > 0){
                blnc = parseFloat(blnc).toFixed(4);
            }
        
            setBalance(blnc)
        } catch (error) {
            console.log(error)
        }
    }

    async function claimToken (){
        try{
            swal("", "Token can only be claimed after lock time and vesting period", " error")
        }catch (error) {
            console.log(error)
        }
    }

    async function sendTransaction (){
        try{
            if(amount <= 0) {
                swal("", "Value should be more than 0" , "error");
                return;
            }

            let valueTosend = await library.utils.toWei(amount , "ether");

            await library.eth.sendTransaction({from: account, to: contract, value: valueTosend});

        } catch(error){
            console.log(error)
        }
    }
    
    async function connect(){
        try{
            await activate(injested);
        } catch (error){
            console.log('error', error)
            swal("" , error.message , "error")
        }
    }

    async function disconnect(){
        try{
            await deactivate();
        } catch (error){
            console.log('error', error)
        }
    }

    useEffect(() => {
      getBalance()
    } , [active, chainId])

    return (
        <div className='gpt3__whatgpt3 section__margin'>
            <div className='row'>
                <div className='gpt3__cta-btn'>
                    {
                        active ?
                            <div >
                                <span className='gpt3__cta-btn'>
                                    <button className='account-dis2'>{balance} MTV</button>
                                    
                                    <span className='account-dis3'>{`${account.substring(0 , 5)}........${account.substring(38)}`}</span>
                                    <span className='account-dis4' onClick={disconnect}>X</span>
                                    
                                </span>
                            </div>
                        :
                            <button className='account-dis2' color='red' onClick={connect}>Connect</button>
                    }
                </div>
                <div className='gpt3__cta-btn'>
                    <button className='account-dis5' color='red' onClick={claimToken}> Claim Token</button>
                </div>
                <div className='gpt3__cta-content'>
                    <div className='gpt3__footer-links'>
                        <form>
                            <div className='gpt3__footer-links_div'>
                                <label>Set Amount</label>
                            </div>
                            <div className='gpt3__footer-links_div'>
                                
                                    <input onInput={(e) => setAmount(e.target.value)} type="number" placeholder=' Enter MTV amount' value={amount} />
                                
                            </div>
                            <div className='gpt3__footer-links_div'>
                                {rate * amount} Lynch
                            </div>
                                
                            
                        </form>
                    </div>
                    <div className='send'>
                        
                            <button type='button' onClick={sendTransaction}>Send</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ico;