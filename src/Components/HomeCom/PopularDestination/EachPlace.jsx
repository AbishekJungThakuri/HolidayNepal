import React from 'react'
import './Destination.css'
import { FaStar } from "react-icons/fa";


export const EachPlace = ({name,price,img,rating}) => {
  return (
    <div className='each-place'>
        <div className="image">
          <img src={img} alt="" />
          <div className='view-more'>View More</div>
        </div>
        <div className="info">
          <h1> {name} </h1>
          <div className='price-rating'>
               <p>${price} starting</p>
               <p> <FaStar className='star-i' /> {rating}</p>
          </div>
        </div>  
    </div>
  )
}
