import React from 'react'
import "./componentStyles/componentStyles.css"


const ObjectiveSquares = ({ boxImage, boxHeading, boxBody, style }) => {
    return (
      <div className='box-container' style={style}>
        <img className='box-image' src={boxImage} alt="Objective" />
        <div className='box-text-container'>
          <h1 className='box-header'>{boxHeading}</h1>
          <p className='box-body'>{boxBody}</p>
        </div>
      </div>
    );
  };
  

export default ObjectiveSquares