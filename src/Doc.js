import React from 'react';
import './Doclist.css';
const Doc = (props) => {
    return (
        <div className='doc'>
            <Image img={props.img} />
            <Name t={props.t} />
            <Specialist a={props.a} />
            <Address aa={props.aa} />
        </div>
    );
};

const Image = (props) => {
    return <img src={props.img} alt='Doc' />
}
const Name = (props) => <p className='name'>{props.t}</p>
const Specialist = (props) => <p className='spec'>{props.a}</p>
const Address = (props) => <p className='address'>{props.aa}</p>

export default Doc;