import React from 'react';
import Navbar from './Navbar.js';
import './Patient2.css';
import Profile1 from './profile.js';
import Patient3 from './Patient3.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Patient2() {
  return (
    <>
    {/* <Navbar /> */}
    <Profile1 />
    <div className="additional-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>
    <div className="profile-container">
      <button className="action-button"> <h2 > <Link to="/Patient3">Make an Appointment</Link></h2></button>
      </div>
    </>
  );
}

export default Patient2;
