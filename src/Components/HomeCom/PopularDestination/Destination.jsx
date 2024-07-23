import React, { useContext } from 'react'
import './Destination.css'
import { EachPlace } from './EachPlace'
import { FaCircleArrowRight } from "react-icons/fa6";
import { storeContext } from '../../../Context/StoreContext';


export const Destination = () => {

  const { destinations } = useContext(storeContext);

  return (
    <div className='destination'>
        <h1 className='title' >Popular <span className='underline'>Destinations</span> </h1>
           <div className='dest-container'>
            {
                destinations.filter(place => place.id < 5).map((place) => (
                    <div key={place.id}>
                        <EachPlace name={place.name} img={place.image} rating={place.rating} price={place.price} />
                    </div>
                ))
            }
          </div>
        <FaCircleArrowRight className='arrow'/>
    </div>
  )
}
