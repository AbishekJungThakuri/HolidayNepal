import React from 'react'
import './Placelayout.css'
import { IoHeartCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";


export const Placelayout = ({name,id, price,rating,img,type}) => {
  return (
    <div className='place-layout'>
        <div className="place-image">
            <img src={img} alt={name + 'image'} />
        </div>

        <div className="place-info">
          <div className="top">
          <h1 className='name'> {name} </h1>
            <p>Historic | Cultural</p>
            <div className="star-rating">
            <FaStar className='star' />
            <p>{rating}</p>
            </div>
          </div>
            
            <button className='readmore'>read more</button>
        </div>
    </div>
  )
}
