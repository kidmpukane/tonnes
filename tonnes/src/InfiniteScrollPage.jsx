import React from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { ObjectivesPage, ObjectivesTop } from './pages/ObjectivesPage'
import myFingy from "./assets/finger.svg"
import "./App.css"

const InfiniteScrollPage = () => {
  return (
    <div>
        <HomePage/>
         <img src={myFingy} alt="Coins" className="finger-svg"/>
        <ObjectivesPage/>
        <ObjectivesTop/>
        <AboutPage/>
    </div>
  )
}

export default InfiniteScrollPage