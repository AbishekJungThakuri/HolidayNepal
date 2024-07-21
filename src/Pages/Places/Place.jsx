import React from 'react'
import './Place.css'
import { Placelayout } from './Placelayout'

export const Place = () => {
  return (
    <div className='place-container'>
      <div className='mountain-img'>
        <h1>Explore Nepal <br />
         <span className='with'>with</span> 
         <span className='holiday-nepal'> Holiday<span className='nepal'>Nepal</span></span> </h1>
      </div>
      <div className="sort-places">
        <h1>Destinations</h1>
        <p>Sort places by</p>
        <select className='selectby' name="" id="">
          <option value="popular">Most Popular</option>
          <option value="expensive">Most Expensive</option>
        </select>

        <div className='place-list'> 
        </div>
      </div>
            <Placelayout/>
    </div>
  )
}
