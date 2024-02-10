import React from 'react';
import './Psign.css'; // Assuming you have a corresponding CSS file for Psign

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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Psign;
