import React from 'react'
import "./pageStyles/aboutpage.css"

const AboutPage = () => {
  return (
    <div className='about-container'>
        <div className='about-img-container'>
            <img className='about-img' alt='' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Pavel_Durov_sitting_portrait.jpg'/>
        </div>
        <div className='about-txt-container'>
            <h1 className='about-header'>PAVEL DUROV</h1>
            <h2 className='about-sub-header'>A Russian entrepreneur & Business executive</h2>
            <span className='about-body-container'>Pavel Durov is a Russian entrepreneur and business executive, best known as the founder of the social network VK and the messaging app Telegram.
Durov announced the Telegram Open Network (TON) in 2018, aiming to create a decentralized blockchain platform with the native token Gram. The project raised around $1.7 billion in investments. 

TON was initially developed by Durov's brother, Nikolai, and was designed to host various decentralized applications and services. It consists of a layer-1 blockchain with multiple components. Despite initial plans for a 2019 launch, the release of TON has been postponed multiple times. In 2024, Pavel Durov was arrested on criminal charges related to an alleged lack of content moderation on Telegram and refusal to work with law enforcement, which allowed the spread of criminal activity.

 This arrest has raised concerns about the future of TON and related projects within the ecosystem.
Despite the controversy, TON has reached significant milestones, surpassing 1.1 million daily active users and achieving a market capitalization of $13.96 billion. However, the ecosystem has shown a high concentration of whale investors, with 98% of tokens held by large stakeholders in some projects.</span>
        </div>
    </div>
  )
}

export default AboutPage