import React, { useState } from 'react';
import './Navbar.css';
// import { FaCommentsDollar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="nav">
      <div className="left-nav">
        <p>
          Holiday<span>Nepal</span>
        </p>
      </div>
      <div className="right-nav">
        <ul>
          <li className="menu-item">
            <Link 
              style={{ textDecoration: 'none' }}
              to="/"
              onClick={() => setMenu('home')}
              className={menu === 'home' ? 'active' : 'list'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/place"
              onClick={() => setMenu('places')}
              className={menu === 'places' ? 'active' : 'list'}
            >
              Places
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/adventure"
              onClick={() => setMenu('adventure')}
              className={menu === 'adventure' ? 'active' : 'list'}
            >
              Adventure
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/package"
              onClick={() => setMenu('package')}
              className={menu === 'package' ? 'active' : 'list'}
            >
              Package
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/event"
              onClick={() => setMenu('event')}
              className={menu === 'event' ? 'active' : 'list'}
            >
              Events
            </Link>
          </li>
          <button className="login-btn">Login/Signup</button>
        </ul>
      </div>
    </div>
  );
};
