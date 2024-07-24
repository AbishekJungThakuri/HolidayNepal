import React, { useState } from 'react';
import './Form.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Form = () => {
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [budget, setBudget] = useState('');
  const [exploration, setExploration] = useState([]);
  const [favActivities, setFavActivities] = useState([]);
  const [accommodation, setAccommodation] = useState('');
  const [foods, setFoods] = useState('');
  const [newExploration, setNewExploration] = useState([]);
  const [newFavourite, setNewFavourite] = useState([]);
  
  const exploration_theme = ['Religious', 'Adventure', 'Cultural', 'History', 'Education', 'Wildlife', 'Business'];
  const fav_Activities = ['Meditation', 'Rafting', 'Trekking', 'Paragliding', 'Boating', 'Camping', 'Budget'];

  const handleSubmit = (e) => {
    e.preventDefault();

// form validation
    if (!date || !day || !budget) {
        alert('Please fill all the Input Fields');
        return;
      }
    if (exploration.length === 0) {
        alert('Please select at least one Exploration Theme');
        return;
    }
      if (!accommodation) {
        alert('Please select at least one Accommodation Preference');
        return;
      }
      if (!foods) {
        alert('Please select at least one Food Preference');
        return;
      }
  
    const formData = {
      date,
      day,
      budget,
      exploration,
      favActivities,
      accommodation,
      foods,
    };

    console.log('Form Data:', formData);
    setDate('');
    setDay('');
    setBudget('');
    setExploration([]);
    setFavActivities([]);
    setAccommodation('');
    setFoods('');
  };


//   Handling Exploration which are in button
  const handleExploration = (explo) => {
    setExploration((prevExploration) => {
      if (prevExploration.includes(explo)) {
        return prevExploration.filter((selectedExplo) => selectedExplo !== explo);
      } else {
        return [...prevExploration, explo];
      }
    });
  };


  //   Handling Favourite which are in button
  const handleFavourite = (fav) => {
    setFavActivities((prevfav) => {
      if (prevfav.includes(fav)) {
        return prevfav.filter((selectedfav) => selectedfav !== fav);
      } else {
        return [...prevfav, fav];
      }
    });
  };

//   Handling Exploration entered in Input field
  const handleAddExploration = () => {
    if (newExploration && !exploration.includes(newExploration)) {
      setExploration([...exploration, newExploration]);
      setNewExploration('');
    }
  };

  //   Handling Favourite entered in Input field
  const handleAddFavourite = () => {
    if (newExploration && !exploration.includes(newExploration)) {
      setExploration([...exploration, newExploration]);
      setNewExploration('');
    }
  };

  const handleAccommodationClick = (value) => {
    setAccommodation(value);
  };

  const handleFoodClick = (value) => {
    setFoods(value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>

      <div className="form-heading">
        <h1>Plan your trip with Sara</h1>
        <button className="chat-btn">Chat with Sara</button>
      </div>

      {/* Input Field */}
      <div className="input-field">
        <div className="date-input">
          <label htmlFor="">Select dates</label>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </div>
        <div className="budg-input">
          <label htmlFor="">Budget</label>
          <input type="tel" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="Nopeople-input">
          <label htmlFor="">No of people</label>
          <input type="tel" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </div>
      </div>


      {/* Exploration Theme */}
      <div className="exploration">
        <label htmlFor="">Exploration Theme</label>
        <div className="btns">
          {exploration_theme.map((explor, i) => (
            <button
              type="button"
              key={i}
              onClick={() => handleExploration(explor)}
              style={{
                backgroundColor: exploration.includes(explor) ? 'lightblue' : '',
              }}
            >
              {explor}
            </button>
          ))}
        </div>
        <div className="add-newExplor">
           <label htmlFor="">Enter your own Exploration</label>
           <input
          type="text"
          value={newExploration}
          onChange={(e) => setNewExploration(e.target.value)}
        />
        <button type="button" onClick={handleAddExploration}>Add Explor</button>
        </div>
      </div>

      {/* Favourite Activities */}
      <div className="favourite">
        <label htmlFor="">Favourite Activities</label>
        <div className="btns">
          {fav_Activities.map((favor, i) => (
            <button
              type="button"
              key={i}
              onClick={() => handleFavourite(favor)}
              style={{
                backgroundColor: favActivities.includes(favor) ? 'lightblue' : '',
              }}
            >
              {favor}
            </button>
          ))}
        </div>
        <div className="add-newFavourite">
           <label htmlFor="">Enter your own favourite </label>
           <input
          type="text"
          value={newFavourite}
          onChange={(e) => setNewFavourite(e.target.value)}
        />
        <button type="button" onClick={handleAddFavourite}>Add Fav</button>
        </div>
      </div>

      {/* Accommodation Preference */}
      <div className="accommodation">
        <label htmlFor="">Accommodation Preference</label>
        <div className="btns">
          <button
            type="button"
            value="Simple"
            onClick={() => handleAccommodationClick('Simple')}
            style={{
              backgroundColor: accommodation === 'Simple' ? 'lightblue' : '',
            }}
          >
            Simple
          </button>
          <button
            type="button"
            value="Luxury"
            onClick={() => handleAccommodationClick('Luxury')}
            style={{
              backgroundColor: accommodation === 'Luxury' ? 'lightblue' : '',
            }}
          >
            Luxury
          </button>
          <button
            type="button"
            value="Authentic"
            onClick={() => handleAccommodationClick('Authentic')}
            style={{
              backgroundColor: accommodation === 'Authentic' ? 'lightblue' : '',
            }}
          >
            Authentic
          </button>
        </div>
      </div>

      {/* Food Preference */}
      <div className="food">
        <label htmlFor="">Food Preference</label>
        <div className="btns">
          <button
            type="button"
            value="Vegetarian"
            onClick={() => handleFoodClick('Vegetarian')}
            style={{
              backgroundColor: foods === 'Vegetarian' ? 'lightblue' : '',
            }}
          >
            Vegetarian
          </button>
          <button
            type="button"
            value="Non-Vegetarian"
            onClick={() => handleFoodClick('Non-Vegetarian')}
            style={{
              backgroundColor: foods === 'Non-Vegetarian' ? 'lightblue' : '',
            }}
          >
            Non-Vegetarian
          </button>
          <button
            type="button"
            value="Vegan"
            onClick={() => handleFoodClick('Vegan')}
            style={{
              backgroundColor: foods === 'Vegan' ? 'lightblue' : '',
            }}
          >
            Vegan
          </button>
        </div>
      </div>

      <button type="submit" className="plan-btn">Plan my trip</button>
    </form>
  );
};

export default Form;
