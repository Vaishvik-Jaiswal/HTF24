import React from 'react';
import './Psign.css'; // Assuming you have a corresponding CSS file for Psign
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Patient1 from './Patient1';

const Psign = () => {
  return (
    <div>
      <p className='text1'>Patient Sign Up</p>
      <div className='PSup'>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" required />
          </div>
          <button type="submit"><Link to="/Patient1">Submit</Link></button>
        </form>
      </div>
    </div>
  );
};

export default Psign;
