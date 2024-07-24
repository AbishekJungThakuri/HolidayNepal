import React, { useState } from "react";
import "./Placelayout.css";
import { FaStar } from "react-icons/fa6";

export const Placelayout = ({
    name,
    id,
    rating,
    img,
    type,
    onReadMore
}) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleReadMoreClick = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className={`place-layout ${isSidebarVisible ? "expanded" : ""}`}>
            <div className="place-image">
                <img src={img} alt={name + "image"} />
            </div>

            <div className="place-info">
                <div className="top">
                    <h1 className="name"> {name} </h1>
                    <p>{type.split(",").join(" | ")}</p>
                    <div className="star-rating">
                        <FaStar className="star" />
                        <p>{rating}</p>
                    </div>
                </div>

                <button className="readmore" onClick={onReadMore}>
                    {isSidebarVisible ? "Show Less" : "Read More"}
                </button>

            </div>
        </div>
    );
};
