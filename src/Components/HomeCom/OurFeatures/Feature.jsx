import React from 'react';
import './Feature.css';
import features from '../../../assets/Data/OurFeatures';
import { SingleBox } from './SingleBox';

export const Feature = () => {
 
  return (
    <>
    <div className='feature'>
        <h1>Our <span>Features</span></h1>
        <div className="boxes">
        {
            features.map((item,index)=> (
              <div key={index}>
                   <SingleBox image={item.image} topic={item.topic} desc={item.desc}/>
              </div>
            ))
        }   
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
