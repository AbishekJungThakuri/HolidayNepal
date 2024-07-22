import React from 'react'
import './Destination.css'
import destinations from '../../../assets/Data/populardestination'
import { EachPlace } from './EachPlace'
import { FaCircleArrowRight } from "react-icons/fa6";


export const Destination = () => {
  return (
    <div className='destination'>
        <h1 className='title' >Popular <span className='underline'>Destinations</span> </h1>
        <div className='dest-wrapper'>
           <div className='dest-container'>
            {
                destinations.filter((place) => place.id < 5).map((place) => (
                    
                  <EachPlace name={place.name} img={place.image} rating={place.rating} price={place.price} />
                    
                ))
            }
          </div>
        <FaCircleArrowRight className='arrow'/>
        </div>
    </div>
  )
}
