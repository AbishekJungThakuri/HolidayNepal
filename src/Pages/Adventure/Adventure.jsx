import React from 'react';
import { Category } from '../../Components/Category/Category';
import adventure_hero from '../../assets/images/adventure-hero-image.jpg'


export const Adventure = () => {
  return (
    <div>
      <Category type="adventure" image={adventure_hero} Utext = 'Embrace' Ltext='The Adventure Expedition' />
    </div>
  );
};
