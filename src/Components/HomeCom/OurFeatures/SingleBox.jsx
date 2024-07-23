import React from 'react'
import './Feature.css'

export const SingleBox = ({image,topic,desc}) => {
  return (
    <div className='box'>
          <div className='icon'>
          <img className='svg-icon' src={image} alt="" />
          </div>
          <div className='desc'>
            <p><span>{topic}</span> {desc} </p>
          </div>
    </div>
  )
}
