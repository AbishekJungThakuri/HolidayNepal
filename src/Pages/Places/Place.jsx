import React from 'react'
import { Category } from '../../Components/Category/Category'
import './Place.css'
import place_hero from '../../assets/images/places-hero-image.jpg'

export const Place = () => {
  return (
    <div>
        {/* <div className="mountain-img">
        <h1>
          Explore Nepal <br />
          <span className="with">with</span>
          <span className="holiday-nepal">
            {' '}
            Holiday<span className="nepal">Nepal</span>
          </span>{' '}
        </h1>
      </div> */}
      <Category type = "P-destination" image={place_hero} Utext = 'Explore Nepal' Ltext='With HolidayNepal' />
    </div>
  )
}
