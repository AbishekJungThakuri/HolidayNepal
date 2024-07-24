import React, { useContext,useState } from 'react';
import PropTypes from 'prop-types';
import './Category.css';
import { storeContext } from '../../Context/StoreContext';
import { Placelayout } from '../PlaceLayoutPages/Placelayout';
import { IoSearch } from "react-icons/io5";
import Sidebar from "./Sidebar";

export const Category = ({ image, Ltext, Utext, category }) => {
  const { categoryPlaces, handleLoadMore, count, allPlaces } = useContext(storeContext);
  const [searchKeyword, changeSearch] = useState('');

  const searchItems = () => {
    console.log(searchKeyword);
  };

  const [sidebarData, setSidebarData] = useState(allPlaces[5]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleReadMoreClick = (place) => {
    setSidebarData(place);
    setIsSidebarVisible(true);
    document.querySelector('.sidebar-container').scrollTop = '0';
  };

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="place-container">
      <div className="pamplet">
        <div className="pamplet-img">
          <img className="hero" src={image} alt="" />
        </div>
        <h1 className="pamplet-text">
          {Utext} <br />
          <span>{Ltext}</span>
        </h1>
      </div>

      <h1 className="heading">Destinations</h1>
      <div className="search-places">
        <input
          id="searchBox"
          type="text"
          placeholder={'Search ' + category + 's'}
          value={searchKeyword}
          onChange={(e) => changeSearch(e.target.value)}
        />
        <button className="search_btn" onClick={searchItems()}>
          <IoSearch />
        </button>
      </div>

      <div className="places">
        <div
          className={`places-grid ${isSidebarVisible ? 'sidebarActive' : ''}`}
        >
          {categoryPlaces[category] &&
            categoryPlaces[category]
              .slice(0, count[category])
              .map((place, index) => (
                <div key={index}>
                  <Placelayout
                    id={place.id}
                    name={place.name}
                    img={place.image}
                    rating={place.rating}
                    category={place.category}
                    city={'kathmandu'}
                    activities={place.activities}
                    description={place.description}
                    onReadMore={() => handleReadMoreClick(place)}
                  />
                </div>
              ))}
        </div>

        <div
          className={`sidebar-container ${isSidebarVisible ? 'visible' : ''}`}
        >
          {sidebarData && (
            <Sidebar
              onClose={handleCloseSidebar}
              name={sidebarData.name}
              id={sidebarData.id}
              type={sidebarData.type}
              img={sidebarData.image}
              rating={sidebarData.rating}
              category={sidebarData.category}
              city={'kathmandu'}
              activities={sidebarData.activities}
              description={sidebarData.description}
            />
          )}
        </div>
      </div>

      <div className="load-more">
        {count[category] < categoryPlaces[category].length && (
          <button className="load-btn" onClick={() => handleLoadMore(category)}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};