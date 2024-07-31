import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import rhino from '../../../assets/images/rhino.jpg'
import './AiTripComponent.css';


export const TripDetailHero = () => {
  return (
    <div className='trip-hero' >
        <img src={rhino} alt="" />
        <div className="trip-title">
            <h1>Terai Wildlife Tour</h1>
            <div className="trip-date">
               <MdOutlineDateRange className='calendar-icon' />
               <p>26th August 2024 - 5th September</p>
            </div>
        </div>
    </div>
  )
}
