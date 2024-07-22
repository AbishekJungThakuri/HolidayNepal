import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className='footer'>
      <div className="social-icon">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
      </div>
        <ul className="lists">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms of Service</li>
          <li>Refund Policy</li>
        </ul>
      <div className="details">
        <p>"HolidayNepal is your premier platform for exploring Nepal s wonders with confidence. Offering AI-driven itineraries, seamless bookings, and expert local insights, we re dedicated to crafting personalized journeys that redefine travel experiences in Nepal."</p>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 HolidayNepal , All rights reserved.</p>
      </div>
    </div>
  )
}
