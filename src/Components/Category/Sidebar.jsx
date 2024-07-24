import React, {useState} from "react";
import "./Sidebar.css"; // Import the CSS for the sidebar
import { FaStar } from "react-icons/fa6";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";


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
    month
}) => {

    const [favorites, updateFavorites] = useState(
        {'places' : [2, 6, 7, 8, 11, 14],
        'activities': [2, 3, 6, 7],
        'events': [2, 3, 4]}
    )


    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-image">
                    <img src={img} alt={`${name} cover`} />
                    {/* Add favorite handler */}
                    <button className="add-to-fav"> 
                    {
                        favorites['places'].includes(id) ? 
                        <><MdOutlineFavorite />
                        <p className="message">Remove from favorites</p>
                        </> :<> <MdOutlineFavoriteBorder  />
                        <p className="message">Add to favorites</p></>
                    }
                </button>
                </div>
                <h1 className="sidebar-name">{name}</h1>
                <div className="type-rating">
                    {category == "places" && (
                        <p className="type">{type.split(",").join(" | ")}</p>
                    )}
                    {category == "events" && (
                        <p className="type">{month}</p>
                    )}
                    <FaStar className="star" />
                    <p>{rating}</p>
                </div>
                {category == "places" && (
                    <>
                        <p>
                            <strong>City:</strong> {city}
                        </p>
                        <p>
                            <strong>Activities:</strong> {activities}
                        </p>
                    </>
                )}
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
