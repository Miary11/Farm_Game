import '../assets/css/style.css';
import React from 'react';

function Card_Details(props) {
    return (
        <div className='card2'>
            <div className='CardTop'>
                <img src={props.pic}/>
            </div>
            <div className='CardBottom'>
                <p className='First'>{props.text1}</p>
                <p>{props.text2}</p>
            </div>
        </div> 
    );
}

export default Card_Details;