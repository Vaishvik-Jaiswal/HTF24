import React from 'react';
import Navbar from './Navbar.js';
import './Patient1.css';
import simg from './assets/icon _search.png';

const Patient1 = () => {
    return (
        <>
            <Navbar />

        <div className='pati1'>
            <div className='info'>
                <p className='para2'>
                Appoint to the Best Doctors here!
                </p>
                    <p className='para3'>
                        We'll personalize your setup experience accordingly.
                        </p>
            </div>

            <div className='search'>
            <img className='search-icon-img' src={simg}></img>
            <p className='text1' >Search Your Doctor</p>
            </div>

            </div>
        </>
    );
}

export default Patient1;