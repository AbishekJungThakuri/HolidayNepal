import React, { useState } from 'react';
import './Navbar.css';
// import { FaCommentsDollar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  
  let urlKeys = window.location.pathname.split('/')
  const [menu, setMenu] = useState(urlKeys[urlKeys.length-1]);
  console.log(menu)

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
              className={menu === 'home' || menu == '' ? 'active' : 'list'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/place"
              onClick={() => setMenu('place')}
              className={menu === 'place' ? 'active' : 'list'}
            >
              Places
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/activity"
              onClick={() => setMenu('activity')}
              className={menu === 'activity' ? 'active' : 'list'}
            >
              Activities
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/package"
              onClick={() => setMenu('package')}
              className={menu === 'package' ? 'active' : 'list'}
            >
              Packages
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
