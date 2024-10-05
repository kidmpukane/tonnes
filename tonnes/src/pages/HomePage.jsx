import React from 'react'
import "./pageStyles/homepage.css"
import myCoins from "../assets/coins.svg"
import myBankNotes from "../assets/banknote.svg"


const HomePage = () => {

  
  return (

    <div className="homepage-main-container">
    <div className="upper-homepage-container">
      <span>WELCOME</span>
      <span>TO THE</span>
      <span>TONNES</span>
    </div>
      <div className="homepage-header-container">
      <img src={myCoins} alt="Coins" className="coins-svg" />
        <img src={myBankNotes} alt="Bank Notes" className="banknotes-svg" />
        
        <h1 className='body-header'>TONNES</h1>

      </div>
      <div className="homepage-body-container">
        <p className="header-upper-span">
        A community, a meme coin created in support of Pavel Durov and his groundbreaking Telegram Open Network (TON).         </p>
      </div>
      <div className="homepage-footer-container">
      </div>
    </div>
  )
}

export default HomePage
