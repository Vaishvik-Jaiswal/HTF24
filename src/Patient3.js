import React from 'react';
import Navbar from './Navbar.js';
import './Patient3.css';
import Profile1 from './profile.js';

function Patient3() {
  return (
    <>
      {/* <Navbar /> */}
      <Profile1 />
      <div className="profile-container">
        <div className="rectangle-container">
          <div className="rectangle" style={{ backgroundColor: "#F9E4A0" }}>Current patient number: pqr</div>
          <div className="rectangle" style={{ backgroundColor: "#F9E4A0" }}>Your appointment number: xyz</div>
        </div>
      </div>
    </>
  );
}

export default Patient3;
