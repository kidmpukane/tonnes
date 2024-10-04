import React from 'react'
import "./pageStyles/objectives.css"
import ObjectiveSquares from '../components/objectiveSquares'
import mySvg1 from "../assets/yw-vr-working.svg"
import svg2 from "../assets/svg2.svg"
import svg3 from "../assets/svg3.svg"
import svg4 from "../assets/svg4.svg"
import svg5 from "../assets/svg5.svg"
import svg6 from "../assets/svg6.svg"
import svg7 from "../assets/svg7.svg"
import svg8 from "../assets/svg8.svg"


const wrkLdy = mySvg1
const mySvg2 = svg2
const mySvg3 = svg3
const mySvg4 = svg4
const mySvg5 = svg5
const mySvg6 = svg6
const mySvg7 = svg7
const mySvg8 = svg8



const myCardsInfo = [
  {
    boxImage: wrkLdy,
    boxHeading: "CLEAR VISION",
    boxBody: "The project aims to share a clear and compelling vision that resonates with your target audience. In this case, it's supporting Pavel Durov and the TON network."
  },
  {
    boxImage: mySvg2,
    boxHeading: "COMMUNICATION",
    boxBody: "Establish open and transparent communication channels. Use social media, forums, and dedicated websites to keep the community informed and engaged."
  },
  {
    boxImage: mySvg3,
    boxHeading: "ENGAGEMENT",
    boxBody: "We encourage participation by organizing events, contests, or AMA (Ask Me Anything) sessions to create a sense of ownership and belonging among community members."
  },
  {
    boxImage: mySvg4, 
    boxHeading: "INCENTIVES",
    boxBody: "Provide incentives for active community members, such as rewards, airdrops, or exclusive access to new features and projects."
  },
  {
    boxImage: mySvg5,
    boxHeading: "COLLABORATION",
    boxBody: "Foster a collaborative environment where community members can contribute ideas, provide feedback, and help each other."
  },
  {
    boxImage: mySvg6,
    boxHeading: "MODERATION",
    boxBody: "Ensure that discussions remain respectful, positive, and on-topic. Establish clear guidelines and enforce them consistently."
  },
  {
    boxImage: mySvg7,
    boxHeading: "EDUCATION",
    boxBody: "Offer educational resources to help community members understand the project and its potential impact."
  },
  {
    boxImage: mySvg8,
    boxHeading: "GROWTH",
    boxBody: "Continuously look for opportunities to expand the community, such as partnerships, collaborations, or outreach programs."
  }
];



const ObjectivesTop = () => {
    return( 
        <div className='top-obj-container'>
            <h1 className='top-obj-h1'>WELCOME TO THE TONNES TONBOOST IS MORE THAN JUST A CRYPTOCURRENCY 👉</h1>
            <h2 className='top-obj-h2'>Tonboost is a symbol of our appreciation for Durov's contributions to decentralized communication and his vision for a more connected world. Join us as we embark on this exciting journey, fostering a positive and respectful community that celebrates the power of blockchain technology and innovative thinking.</h2>
        </div>
    )
}

const ObjectivesBottom = () => {
    return( 
      <div className='container-of-boxes'>
        {myCardsInfo.map((card, index) => (
          <ObjectiveSquares
            key={index}
            boxImage={card.boxImage}
            boxHeading={card.boxHeading}
            boxBody={card.boxBody}
          />
        ))}
      </div>
    )
}


const ObjectivesPage = () => {
  return (
    <div className='obj-container'>
      <h1 className='obj-container-header'>OUR OBJECTIVES</h1>
      <div className='lower-container'><ObjectivesBottom/></div>
    </div>
  )
}

export{ ObjectivesPage, ObjectivesTop}