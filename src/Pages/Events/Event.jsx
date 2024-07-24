import React from 'react'
import { Category } from '../../Components/Category/Category';
import event_hero from '../../assets/images/event-hero.jpg'

export const Event = () => {
  return (
    <div>
      <Category category="events" image={event_hero} Utext = 'Vibrant' Ltext='Celebrations of Tradition'/>
    </div>
  )
}

