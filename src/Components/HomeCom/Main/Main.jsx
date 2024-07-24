import React from 'react'
import './Main.css'
import { IoSparkles } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const Main = () => {

  return (
    <div className='main'>
         <div className="left">
            <div className="text">
                <p>Your Best Guide</p>
                <h1>To <span className='un-line'>Travel</span> <br />Nepal </h1>
                <p>Discover Nepal like never before with HolidayNepal <br />Your ultimate travel companion for unforgettable adventures.</p>
            </div>
            <Link to='/form' style={{textDecoration:'none'}}>
             <div className='btn'>
                <IoSparkles className='sparkle-icon' /> Create Trip with AI
             </div>
             </Link>
         </div>
         <div className="right">
             <div className='frame frame1'></div>
             <div className='frame frame2'></div>
             <div className='frame frame3'></div>
             <div className='frame frame4'></div>
         </div>
    </div>
  )
}
