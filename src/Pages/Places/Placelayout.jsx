import React from 'react'
import './Place.css'
import pkr from '../../assets/pokhara.jpg'
import { FaStar } from "react-icons/fa";

export const Placelayout = () => {
  return (
    <div className='place-layout'>
        <div className="place-imag">
            <img src={pkr} alt="" />
        </div>
        <div className="place-info">
            <div className='name-heart' >
            <h1>Pokhara</h1>
            </div>
            <p>$550 starting</p>
            <div className="star-rating">
            <FaStar className='star' />
            <p>4.7</p>
            </div>
            <button className='readmore'>read more</button>
        </div>
    </div>
  )
}
