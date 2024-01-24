import '../assets/css/style.css';
import React from 'react';

function Side_Card_Container(props) {
    return (
        <div className='caroussel' id='c2'>
            {props.children}
        </div> 
    );
}

export default Side_Card_Container;