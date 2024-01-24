import '../assets/css/style.css';
import React from 'react';

function Pic_Container(props) {
    return (
        <div className='picContainer'>
            <img src = {props.image} alt={props.description}/>
        </div> 
    );
}

export default Pic_Container;