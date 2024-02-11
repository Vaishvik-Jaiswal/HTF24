import React from 'react';
import './Dsign.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Dsign = () => {

  return (
    <div>
      <p className='text1'>Doctor Sign Up</p>
      <div className='DSup'>
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
            <label htmlFor="qualification">Qualification:</label>
            <input type="text" id="qualification" name="qualification" required />
          </div>
          <div>
            <label htmlFor="experience">Experience (yrs):</label>
            <input type="number" id="experience" name="experience" required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" required />
          </div>
          <div>
            <label htmlFor="about">About:</label>
            <textarea id="about" name="about" required />
          </div>
          <button type="submit"><Link to="/TodaysApp">Submit</Link></button>
        </form>
      </div>

    </div>
  );
};

export default Dsign;
