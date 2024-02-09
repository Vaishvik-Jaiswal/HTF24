import React from 'react';
import Logo from './assets/Logo.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './landingPage.css';
import lp from './assets/lp_vector.png';

const LandingPage = () => {
  return (
    <Router>
      <div className="landing-page">
        <nav className="navbar">
          <div className="logo">
            <img className="LOGO" src={Logo} alt="Logo" />
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>

      <div className="below-navbar">
        <div className='info'>
            <p className='para1'>
            Welcome to DocIt, where healthcare meets convenience. At DocIt, we're on a mission to simplify the patient-doctor interaction. Say goodbye to long waits and embrace streamlined communication.
            </p>
            <img className='vector1' src={lp}></img>
        </div>
    </div>

    {/* <div className='below-vector'>
                <div className='choose-d-p'>
            <p className='para2'>
                How do you want to use DocIt?
            </p>
            <p className='para3'>
                We'll personalize your setup experience accordingly.
            </p>
            <button className='doctor-button'>
                Doctor
            </button>
            <button className='patient-button'>
                Patient
            </button>
        </div> */}
    {/* </div> */}
    </Router>
  );
};

export default LandingPage;
