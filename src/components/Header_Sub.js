import '../assets/css/style.css';
import React from 'react';

function Header_Sub(props) {
    return (
        <header>
            <div className='LeftTop'>
              <img src = {props.logo} alt = {props.description}/>
            </div>
        </header> 
    );
}

export default Header_Sub;