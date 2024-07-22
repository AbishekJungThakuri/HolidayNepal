import React from 'react';
import adventure_hero from '../../assets/images/adventure-hero-image.jpg'
import './Adventure.css'
import { Category } from '../../Components/Category/Category';


export const Adventure = () => {
  return (
    <div>
        <div className="adventure-img">
        <h1>
        Embrace <br />
          <span className="the">the</span>
          {' '}Adventure Expedition
        </h1>
      </div>
      <Category type="adventure" />
    </div>
  );
};
