import React from 'react';
import './profile.css';
import Profile from './assets/profile.png';

function Profile1() {
    return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-image">
        <img src={Profile}></img>
        </div>
        <div className="profile-text">
          <h1> Dr. Lorem Ipsum</h1>
          <h3><p>DENTISTRY<br></br>
            MBBS M.D<br></br>
            Kroma Multispeciality Dental Clinic, Gandhinagar<br></br>
            30 yrs</p></h3>
        </div>
      </div>
      
      </div>
       );
    }
    export default Profile1;