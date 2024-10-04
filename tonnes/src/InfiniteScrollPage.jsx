import React from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { ObjectivesPage, ObjectivesTop } from './pages/ObjectivesPage'

const InfiniteScrollPage = () => {
  return (
    <div>
        <HomePage/>
        <ObjectivesPage/>
        <ObjectivesTop/>
        <AboutPage/>
    </div>
  )
}

export default InfiniteScrollPage