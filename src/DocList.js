import Doc from "./Doc.js";
import React from 'react';
import './Doclist.css';
import ps from './assets/profile.png';

const Doclist = () => {
    return(
    <div className="Doclist">
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