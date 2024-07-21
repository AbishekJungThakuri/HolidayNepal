import React from 'react'
import './Home.css'
import { Main } from '../../Components/HomeCom/Main/Main'
import { Feature } from '../../Components/HomeCom/OurFeatures/Feature'
import { Review } from '../../Components/HomeCom/Review/Review'
import { Contact } from '../../Components/HomeCom/Contact/Contact'
import { Destination } from '../../Components/HomeCom/PopularDestination/Destination'


export const Home = () => {

  return (
    <>
    <div className='section'>
      <Main/>
      <Destination/>
      <Feature/>
      <Review/>
      <Contact/>
    </div>
      
    </>
  )
}
