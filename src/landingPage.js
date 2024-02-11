import React from 'react';
import Logo from './assets/Logo.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './landingPage.css';
import lp from './assets/lp_vector.png';
import Navbar from './Navbar.js';

const LandingPage = () => {
    return (

        <> 
            <div className="below-navbar">
                <div className='info'>
                    <p className='para1'>
                        Welcome to DocIt, where healthcare meets convenience. At DocIt, we're on a mission to simplify the patient-doctor interaction. Say goodbye to long waits and embrace streamlined communication.
                    </p>
                    <img className='vector1' src={lp}></img>
                </div>
            </div>

            <div className='below-vector'>
                <div className='choose-d-p'>
                    <div className='para2'><p>
                        How do you want to use DocIt?
                    </p></div>
                    <div className='para3'>
                        <p>
                            We'll personalize your setup experience accordingly.
                        </p>
                    </div>
                    <div className='lp-buttons'>
                        <button className='doctor-button'>
                            <Link to="/Dlogin">Doctor</Link>
                        </button>

                        <button className='patient-button'>
                            <Link to="/login">Patient</Link>
                        </button>

                    </div>

                </div>
            </div></>
    );
};

export default LandingPage;