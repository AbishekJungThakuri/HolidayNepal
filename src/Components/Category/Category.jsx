import React, { useContext } from 'react';
import './Category.css';
import { storeContext } from '../../Context/StoreContext';
import { Placelayout } from '../PlaceLayoutPages/Placelayout';

export const Category = (props) => {
  const { destinations } = useContext(storeContext);

  return (
    <div className="place-container">

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
          {destinations.map((place) => ( props.type === place.type ? 
            <div key={place.id}>
             <Placelayout
                name={place.name}
                img={place.image}
                rating={place.rating}
                price={place.price}
              />
            </div>: null
          ))}
        </div>
        <button className="load-more">Load more</button>
      </div>
    </div>
  );
};
