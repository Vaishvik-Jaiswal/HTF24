import React from 'react';
import './SignUp.css';
import Logo from './assets/Logo.png';
function   SignUp() {
  return (
    <div className="container">
      <div className="box">
        <div className='grid'>
        <div className="logo">
            <img className="LOGO" src={Logo} alt="Logo" />
          </div>
        <center><p className='Welcome'>lorem</p></center>
        </div>
      </div>
      
      <div className="box">
        <div className='box1'>
        <center><h1>SignUp</h1></center>
        </div>
        <br></br>
        <form>
          <center>
          <input type="text" placeholder="Username" style={{ borderRadius: '10px', marginBottom: '10px' }}/>
          <input type="text" placeholder="Password" style={{ borderRadius: '10px', marginBottom: '10px' }}/>
          </center>
          <center><input type="submit" value="Submit" style={{ borderRadius: '30px', marginBottom: '20px' }} /></center>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
