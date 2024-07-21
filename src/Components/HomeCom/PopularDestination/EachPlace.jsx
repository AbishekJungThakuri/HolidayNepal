import React from 'react'
import './Destination.css'
import { FaStar } from "react-icons/fa";


export const EachPlace = ({name,price,img,rating}) => {
  return (
    <div className='each-place'>
        <div className="place">
          <img src={img} alt="" />
        </div>
          <h1> {name} </h1>
          <div className='price-rating'>
               <p>${price} starting</p>
               <FaStar className='star-i' />
               <p>{rating}</p>
          </div>
    </div>
  )
}
