import React, { useState } from 'react';
import './AiTripComponent.css';
import { TripDetailHero } from './TripDetailHero';
import { TripInfo } from '../Trip Info/TripInfo';
import { TripItinery } from '../Trip itinery/TripItinery';
import { UsefulInfo } from '../trip Useful info/UsefulInfo';


export const AiTripComponent = () => {

  const [tripInfoBtn, setInfoBtn] = useState("tripInfo");

  const handleButtonClick = (value) => {
    setInfoBtn(value);
  };

  return (
    <div className="trip-details">
      <div className="trip-description">
        <TripDetailHero />
        <div className="three-btn">

          {
          ['tripInfo', 'tripItinery', 'usefulInfo'].map((btn) => (
            <button
              key={btn}
              value={btn}
              onClick={(e) => handleButtonClick(e.target.value)}
              className={tripInfoBtn === btn ? 'active-btn' : ''}
            >
              {btn === 'tripInfo' && 'Trip Info'}
              {btn === 'tripItinery' && 'Trip Itinerary'}
              {btn === 'usefulInfo' && 'Useful Info'}
            </button>
          ))
          }
        </div>
        {tripInfoBtn === "tripInfo" && <TripInfo/>}
        {tripInfoBtn === "tripItinery" && <TripItinery/>}
        {tripInfoBtn === "usefulInfo" && <UsefulInfo/>}
      </div>
      <div className="trip-map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224911.31667332997!2d84.22574630086274!3d27.575748241146496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994439ad1ca5a8d%3A0x6c5e40f75e1f474f!2sChitawan!5e0!3m2!1sen!2snp!4v1722363771033!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
