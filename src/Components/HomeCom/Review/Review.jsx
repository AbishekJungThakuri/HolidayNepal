import React from 'react';
import './Review.css';
import { FaStar } from 'react-icons/fa';
import inverted_comma from '../../../assets/InvertedComma.png';
import girl from '../../../assets/girl.jpg';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";


export const Review = () => {
  return (
    <div className="review">
      <div className="heading">
        <h1>
          What They <br />
          Say About Us
        </h1>
      </div>
      <div className="img-desc">
        <img className="reviewer-img" src={girl} alt="" />
        <div className="description">
          <div className="rating">
            <img src={inverted_comma} alt="" />
            <div className="stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
            </div>
            <p>(4.7/5)</p>
          </div>
          <div className="Desc">
            <p>
              Using HolidayNepal was a game-changer for my Nepal trip! The AI-generated itinerary was spot-on, and booking everything was seamless. The real-time tips and exclusive deals made my experience unforgettable. Highly recommend!
            </p>
            <h1>Samantha Stark</h1>
          </div>
          <div className='slider'>
        <FaCircleArrowLeft />
        <FaCircleArrowRight />
    </div>
        </div>
      </div>

    
    </div>
  );
};
