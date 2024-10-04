import React from 'react'
import "./componentStyles/componentStyles.css"


const ObjectiveSquares = (props) => {
  return (
    <div className='box-container'>
        <img className='box-image' alt={"no-image"} src={props.boxImage}/>
        <div className='box-text-container'>
            <h1 className='box-header'>
            {props.boxHeading}
            </h1>
            <span className='box-body'>
                {props.boxBody}
            </span>
        </div>
    </div>
  )
}

export default ObjectiveSquares