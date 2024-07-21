import React from 'react'
import './Main.css'

export const Main = () => {
  return (
    <div className='main'>
         <div className="left">
            <div className="text">
                <p>Your Best Guide</p>
                <h1>To <span className='un-line'>Travel</span> <br />Nepal </h1>
                <p>Discover Nepal like never before HolidayNepal <br />Your ultimate travel companion for unforgettable adventures.</p>
            </div>
             <div className='btn'>
                <p>Create Trip with AI</p>
             </div>
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
