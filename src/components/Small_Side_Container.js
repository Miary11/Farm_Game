import '../assets/css/style.css';
import React from 'react';

function Small_Side_Container(props) {
    return (
        <div className='small-container'>
            <section className='Titling'>
                <span>
                    <p>{props.titre}</p>
                </span>
                <span className='Stroke'/>
                <span className='Full'/>
            </section>
            {props.children}
        </div> 
    );
}

export default Small_Side_Container;