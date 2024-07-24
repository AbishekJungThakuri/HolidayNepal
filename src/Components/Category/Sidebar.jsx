import React from "react";
import "./Sidebar.css"; // Import the CSS for the sidebar
import { FaStar } from "react-icons/fa6";

const Sidebar = ({
    onClose,
    name,
    id,
    type,
    img,
    rating,
    category,
    city,
    activities,
    description,
}) => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-image">
                    <img src={img} alt={`${name} cover`} />
                </div>
                <h1 className="sidebar-name">{name}</h1>
                <div className="type-rating">
                    <p className="type">{type.split(",").join(" | ")}</p>
                    <FaStar className="star" />
                    <p>{rating}</p>
                </div>
                <p>
                    <strong>City:</strong> {city}
                </p>
                <p>
                    <strong>Activities:</strong> {activities}
                </p>
                <p className="desc">
                    <strong>Description:</strong> {description}
                </p>
            </div>
            <button className="close-button" onClick={onClose}>
                Show less
            </button>
        </div>
    );
};

export default Sidebar;
