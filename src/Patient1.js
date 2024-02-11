import React from 'react';
import Navbar from './Navbar.js';
import './Patient1.css';
import simg from './assets/icon _search.png';
import Doclist from './DocList.js';
import { Link } from 'react-router-dom';

const Patient1 = () => {
    return (
        <>
            {/* <Navbar /> */}

        <div className='pati1'>
            <div className='info'>
                <p className='para2'>
                Appoint to the Best Doctors here!
                </p>
                    <p className='para3'>
                    Looking to schedule a primary care doctor appointment this week? Let DocIt help you effortlessly locate nearby doctors who accept your insurance. It's easy, confidential, and completely free.
                        </p>
            </div>

            {/* <div className='search'>
            <img className='search-icon-img' src={simg}></img>
            <p className='text1' >Search Your Doctor</p>
            </div> */}
            </div>
            <Link to="/Patient2">
            <div className='doctors'>
                <Doclist />
            </div>
            </Link>
        </>
    );
}

export default Patient1;