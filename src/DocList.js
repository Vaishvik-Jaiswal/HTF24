import Doc from "./Doc.js";
import React from 'react';
import './Doclist.css';
import ps from './assets/profile.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Doclist = () => {
    return(
    <div className="Doclist">
        {/* <Link to="/Patient2"> */}
    <Doc img={ps} t= "Dr. Lorem" a="Dentist" aa="Gandhinagar,Ahemdabad,Gujarat."/>
    <Doc img={ps} t= "Dr. Lorem" a="Dentist" aa="Gandhinagar,Ahemdabad,Gujarat."/>
    <Doc img={ps} t= "Dr. Lorem" a="Dentist" aa="Gandhinagar,Ahemdabad,Gujarat." />
    <Doc img={ps} t= "Dr. Lorem" a="Dentist" aa="Gandhinagar,Ahemdabad,Gujarat." />
    <Doc img={ps} t= "Dr. Lorem" a="Dentist" aa="Gandhinagar,Ahemdabad,Gujarat."/>
    <Doc img={ps} t= "Dr. Lorem" a="Dentist" aa="Gandhinagar,Ahemdabad,Gujarat."/>
    <Doc img={ps} t= "Dr. Lorem" a="Dentist" aa="Gandhinagar,Ahemdabad,Gujarat."/>
    <Doc img={ps} t= "Dr. Lorem" a="Dentist" aa="Gandhinagar,Ahemdabad,Gujarat."/>
    
    {/* <Book img="https://images-na.ssl-images-amazon.com/images/I/81IkGU1958L.AC_UL600_SR600,400.jpg" t= "Mr. Lorem" a="Dentist"/> */}
    </div>
    );
};
export default Doclist;