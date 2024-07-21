import React from 'react'
import './Feature.css'

export const SingleBox = ({image,topic,desc}) => {
  return (
    <div className='box'>
          <div className='icon'>
          <img className='svg-icon' src={image} alt="" />
          </div>
          <div className='desc'>
            <h1> {topic} </h1>
            <p> {desc} </p>
          </div>
    </div>
  )
}
