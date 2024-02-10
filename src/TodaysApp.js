import React from 'react';
import Navbar from './Navbar.js';
import './TodaysApp.css';
import Profile1 from './profile.js';
function TodaysApp() {
    return (
      <>
      <Navbar />
      <Profile1 />
      <div className="profile-container">
        <h1>Today's Appointment</h1>
      </div>
      </>
    );
  }
  export default TodaysApp;