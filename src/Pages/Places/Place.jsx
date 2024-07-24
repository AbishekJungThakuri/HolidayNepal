import React from 'react'
import { Category } from '../../Components/Category/Category'
import place_hero from '../../assets/images/places-hero-image.jpg'

export const Place = () => {
  return (
    <div>
      <Category category = "places" image={place_hero} Utext = 'Explore Nepal' Ltext='With HolidayNepal' />
    </div>
  )
}
