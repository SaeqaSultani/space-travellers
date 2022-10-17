import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => (
  <div className="header">
    <div className="div-logo">
      <img className="logo" src={logo} alt="user" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav className="nav-des">
      <NavLink className="nav-link" activeclassname="active" to="/">
        Rockets
      </NavLink>
      <NavLink className="nav-link" activeclassname="active" to="/missions">
        Missions
      </NavLink>
      <hr />
      <NavLink className="nav-link" activeclassname="active" to="/my-profile">
        My Profile
      </NavLink>
    </nav>
  </div>
);

export default Navbar;
