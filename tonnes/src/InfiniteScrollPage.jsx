import React from 'react'
import HomePage from './pages/HomePage'
import { ObjectivesPage, ObjectivesTop } from './pages/ObjectivesPage'

const InfiniteScrollPage = () => {
  return (
    <div>
        <HomePage/>
        <ObjectivesTop/>
        <ObjectivesPage/>
    </div>
  )
}

export default InfiniteScrollPage