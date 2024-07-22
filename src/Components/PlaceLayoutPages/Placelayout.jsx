import React from 'react'
import './Placelayout.css'
import { FaStar } from "react-icons/fa";
import { IoHeartCircle } from "react-icons/io5";


export const Placelayout = ({name,price,rating,img}) => {
  return (
    <div className='place-layout'>
        <div className="place-imag">
            <img src={img} alt="" />
        </div>
        <div className="place-info">
            <div className='name-heart' >
               <h1> {name} </h1>
               <IoHeartCircle className='heart' />
            </div>
            <p>${price} starting</p>
            <div className="star-rating">
            <FaStar className='star' />
            <p>{rating}</p>
            </div>
            <button className='readmore'>read more</button>
        </div>
    </div>
  )
}
