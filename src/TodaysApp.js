// import React from 'react';
// import Navbar from './Navbar.js';
// import './TodaysApp.css';
// import Profile1 from './profile.js';
// function TodaysApp() {
//     return (
//       <>
//       {/* <Navbar /> */}
//       <Profile1 />
//       <div className="profile-container">
//         <h1>Today's Appointment</h1>
//       </div>
//       </>
//     );
//   }
//   export default TodaysApp;

// import React from 'react';
// import Navbar from './Navbar.js';
// import './TodaysApp.css';
// import Profile1 from './profile.js';
// function TodaysApp() {
//     return (
//       <>
//       <Navbar />
//       <Profile1 />
//       <div className="profile-container">
//         <h1>Today's Appointment</h1>
//       </div>
//       </>
//     );
//   }
//   export default TodaysApp;


import React from 'react';
import Navbar from './Navbar.js';
import './Patient2.css';
import Profile1 from './profile.js';

function Patient2() {
  return (
    <>
      <Navbar />
      <Profile1 />
      <div className="additional-text">
        <div className="radio-container">
          <div className="radio-item">
            <label htmlFor="radio1">Name 1</label>
            <input type="radio" id="radio1" name="name1" />
          </div>
          <div className="radio-item">
            <label htmlFor="radio2">Name 2</label>
            <input type="radio" id="radio2" name="name1" />
          </div>
          {/* Add more radio buttons and names as needed */}
        </div>
      </div>
    </>
  );
}

export default Patient2;