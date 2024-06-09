import React from 'react';
import Logo from '../assets/AI.GEN.png';
import Donald from '../assets/DonaldTrump.png';
import Albert from '../assets/Albert.png'
import billgates from '../assets/billgates.png'

import facebook from '../assets/facebook.png'
import mark from '../assets/mark.png'
import Obama from '../assets/Obama.png'
import uncle from '../assets/uncle.png'
import whitehair from '../assets/whitehair.png'
import boy from '../assets/boy.png'
import background from '../assets/backgroundpic.png'
import shoe from '../assets/shoe.png'
import AI from '../assets/AI.png'
import Girl from '../assets/Girl.png'
import keyboard from '../assets/keyboard.png'



export const Container = () => {
    return (
        <>
            <header>
                <div className='main'>
                    <div className='left'>
                        <img src={Logo} alt="Logo" />
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Roadmap</a></li>
                            <li><a href="#">Tokenomics</a></li>
                        </ul>

                    </div>
                    <div className='right'>
                        <button className='whitepaper'>Whitepaper</button>
                        <button className='getstarted'>Get Started</button>

                    </div>
                </div>
            </header>
            <div className='main-container'>
                <section className='IOTA-section'>
                    <div className='IOTA-syrum'>
                        <p className='newAIgen'><span class="material-symbols-outlined">celebration</span>New in AI.GEN:  Real Time Interaction</p>
                        <h1>IOTA polygon serum ipsum WAX terraUSD gala THETA.</h1>
                        <p className='text'>Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
                        <button className='getstarted'>Get Started</button>

                    </div>
                    <div className='allimages'>
                        <img className="first" src={Donald} alt="Donald" />
                        <img className="second" src={boy} alt="" />
                        <img className="third" src={Obama} alt="" />
                        <img src={whitehair} alt="" />
                        <img src={mark} alt="" />
                        <img src={Albert} alt="" />
                        <img src={facebook} alt="" />
                        <img src={billgates} alt="" />
                        <img src={uncle} alt="" />

                    </div>

                </section>
                <div className='backgroundimage'>
                    <img src={background} alt="" />
                </div>
            </div>

            {/* 
            how it works section */}


            <section className='how-works'>
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/e16c/a06f/9164d79c6c5519475e7b5e0a4762ea0d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=glwTJ41eJaB0UTBmwepzBx4L99Ly1wtCHTccHNkJgCOtoMHb0krAK~xtCe-ZowHhQj3ouem5ScCfTcooPi80S~t6rS7at-ZXGI2~Q5FdqC8mPFHQxI5GSr6d6aFwx2PqEJawPr8KoUzewAUt8xbZPhjZEOjwwB87wmpCd1bFupEMJqOHhvL435x2xP7afuddKW9tvbY9uLh41OS8YLnmIwWc4FEdbKC7LWD8HzrKaD2dPQ6f6kIPBsZyVhH0V9SUmfQjKjf3AWVgn7GJTl1vCepw5FXpdzo98rnBKMPbUKa4-9gZwM60HuH1UyRYmB~OcxhjFy2cNlRmBvAGbc7K-A__" alt="" />
                </div>
                <div className='text-container'>
                    <h1>How it works</h1>
                    <h3>Select an Avatar</h3>
                    <p>Create or Generate Script Select All Voices Publish</p>
                </div>
            </section>


            {/* categories */}
            <div className='categories'>
                <p>Technology</p>
                <p>Design</p>
                <p>Artificial Intelligence</p>
                <p>AI Chat Bot</p>
                <p>Marketing</p>
                <p>Customezable</p>
                <p>3D Model</p>

                <p>People</p>
                <p>Create Videos</p>
                <p>Analyze</p>
                <p>Outfits</p>
                <p>Marketing</p>
                <p>3D Model</p>
                <p>Voice Chat</p>
                <p>Marketing</p>

            </div>
            {/* 4 images container */}

            <section className='images-grid'>
                <img src={shoe} alt="" />
                <img src={Girl} alt="" />
                <img src={keyboard} alt="" />
                <img src={AI} alt="" />

            </section>



            {/* tokenomics */}

            <section className='tokenomics'>
                <h1 class="gradient-text">Tokenomics</h1>
                <div class='lists'>
                    <ul>
                        <li>Name: AI GEN</li>
                        <li>Total Supply: 1B</li>
                        <li>Contract: Lorem ipsum dolor sit a...</li>
                    </ul>

                    <ul>
                        <li>Token Name : SAIGEN</li>
                        <li>Circulating Supply : 1B</li>
                        <li>Chain : Ethereum</li>
                    </ul>
                </div>
            </section>


        </>
    );
};
