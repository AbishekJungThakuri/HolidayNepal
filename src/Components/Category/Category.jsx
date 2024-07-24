import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Category.css';
import { storeContext } from '../../Context/StoreContext';
import { Placelayout } from '../PlaceLayoutPages/Placelayout';
import { IoSearch } from "react-icons/io5";
export const Category = ({image,Ltext,Utext,category}) => {
  
  const { places } = useContext(storeContext);
  const [searchKeyword, changeSearch] = useState('')

  const searchItems = () =>{
    console.log(searchKeyword)
  }
  
  return (
    <div className="place-container">
      <div className="pamplet">
        <div className="pamplet-img">
          <img className='hero' src={image} alt="" />
        </div>
        <h1 className='pamplet-text'>
          {Utext} <br />
          <span>{Ltext}</span>
        </h1>
      </div>

      <h1 className='heading'>Destinations</h1>
      <div className="search-places">
        <input id='searchBox' type="text" placeholder={'Search ' + category +'s'} value={searchKeyword} onChange={(e) => changeSearch(e.target.value)}/>
        <button className='search_btn' onClick={searchItems()}><IoSearch /></button>
      </div>

        <div className="places">
          {places.map((place, index) => (
              category === place.category ? (
              <div key={index}>
                <Placelayout
                  name={place.name}
                  id={place.id}
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
  );
};