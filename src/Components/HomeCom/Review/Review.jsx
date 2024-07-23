import React from "react";
import "./Review.css";
import { FaStar } from "react-icons/fa";
import inverted_comma from "../../../assets/images/InvertedComma.png";
import girl from "../../../assets/images/girl.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

export const Review = () => {
    return (
        <div className="review">
            <div className="heading">
                <h1>
                    What They Say <span  className='underline'>About Us</span>
                </h1>
            </div>
            <div className="review-container">
                <div className="single-review">
                  <div className="review-image">
                    <img src={girl} alt="" />
                  </div>
                    <div className="description">
                        <div className="rating">
                            <img src={inverted_comma} alt="" />
                            <div className="stars">
                                <FaStar className="star fill" />
                                <FaStar className="star fill" />
                                <FaStar className="star fill" />
                                <FaStar className="star fill" />
                                <FaStar className="star no-fill" />
                            </div>
                        </div>
                        <div className="Desc">
                            <p>
                                Using HolidayNepal was a game-changer for my
                                Nepal trip! The AI-generated itinerary was
                                spot-on, and booking everything was seamless.
                                The real-time tips and exclusive deals made my
                                experience unforgettable. Highly recommend!
                            </p>
                            <h1>Samantha Stark</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider">
                <FaCircleArrowLeft className="left-slider"/>
                <FaCircleArrowRight className="right-slider"/>
            </div>
        </div>
    );
};
