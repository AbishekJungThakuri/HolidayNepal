import React from 'react';
import './Feature.css';
import { SingleBox } from './SingleBox';
import shine from '../../../assets/shines.png';
import booking from '../../../assets/booking.png';
import destination from '../../../assets/destination.png';
import tasks from '../../../assets/tasks.png';
import best_price from '../../../assets/best-price.png';
import budgeting from '../../../assets/budgeting.png';


export const Feature = () => {
 
  let topic1 = 'AI-Generated Travel Itineraries:';
  let topic2 = 'Seamless Booking Experiences:';
  let topic3 = 'Real-Time Travel Assistance:';
  let topic4 = 'Interactive Budget Planner:';
  let topic5 = 'Exclusive travel Deals:';
  let topic6 = 'Comprehensive Destination Guides:';
  let desc1 = 'Get personalized travel plans crafted by advanced AI, trailored to your interests,budget, and schedule, for a unique and unforgettable Nepal experience.';
  let desc2 = 'Effortlessly book hotels, transportation, and travel packages in one place, with AI-powered recommendations and comparisons for the best options.';
  let desc3 = 'Access real-time support and travel tips from local experts and AI-driven chatbots to ensure a smooth and enjoyable trip.';
  let desc4 = 'Utilize our interactive budget planner to manage your expenses, track your spending, and optimize your travel budget for a worry-free journey.';
  let desc5 = 'Unlock exclusive travel deals and discounts on hotels, tours, and activities, specially curated for HolidayNepal users to make the most of your visit.';
  let desc6 = 'Explore detailed guides for top destinations in Nepal, featuring must-see attractions, hidden gems, cultural insights, and travel tips to enhance your adventure.';

  return (
    <>
    <div className='feature'>
        <h1>Our <span>Features</span></h1>
        <div className="boxes">
            <SingleBox image={shine} topic={topic1} desc={desc1}/>
            <SingleBox image={booking} topic={topic2} desc={desc2}/>
            <SingleBox image={tasks} topic={topic3} desc={desc3}/>
            <SingleBox image={budgeting} topic={topic4} desc={desc4}/>
            <SingleBox image={best_price} topic={topic5} desc={desc5}/>
            <SingleBox image={destination} topic={topic6} desc={desc6}/>
        </div>
    </div>

    <div className="stats">
      <div className="join">
        <h1>50K+</h1>
        <p>Join the millions who trust us for their travel plans. Our platform is your go-to solution for your exploration to Nepal.</p>
      </div>
      <div className="loveUs">
        <h1>95%</h1>
        <p>Our customer love us ! With a 95% satisfaction rates, we pride ourselves on providing exceptional service.</p>
      </div>
      <div className="visited">
        <h1>100</h1>
        <p>Explore Nepal with us ! We offer travel packages to over 100 destination inside Nepal giving you a wide range of options.</p>
      </div>
    </div>
    </>
  )
}
