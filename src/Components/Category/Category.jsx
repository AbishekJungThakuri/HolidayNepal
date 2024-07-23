import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Category.css';
import { storeContext } from '../../Context/StoreContext';
import { Placelayout } from '../PlaceLayoutPages/Placelayout';

export const Category = ({image,Ltext,Utext,category}) => {
  
  const { places } = useContext(storeContext);

  return (
    <div className="place-container">
      <div className="pamplet">
        <div className="pamplet-img">
          <img className='hero' src={image} alt="" />
        </div>
        <h1>
          {Utext} <br />
          {Ltext}
        </h1>
      </div>

      <div className="sort-places">
        <h1>Destinations</h1>
        <p>Sort places by</p>
        <select className="selectby" name="" id="">
          <option value="popular">Most Popular</option>
          <option value="expensive">Most Expensive</option>
        </select>
        <div className="place-list"></div>
      </div>

      <div className="places-loadmore">
        <div className="places">
          {places.map((place, index) => (
              category === place.category ? (
              <div key={index}>
                <Placelayout
                  name={place.name}
                  img={place.image}
                  rating={place.rating}
                  price={place.price}
                  category={place.category}
                />
              </div>
            ) : null
          ))}
        </div>
      </div>
      <div className='load-more'>
        <button className="load-btn">Load more</button>
      </div>
    </div>
  );
};