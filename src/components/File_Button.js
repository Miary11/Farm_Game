import '../assets/css/style.css';
import React from 'react';

function File_Button(props) {
    return (
        <div className='fileButton'>
            <label className='customButton'>+</label>
            <input type='file' name={props.nom}/>
        </div>
    );
}

export default File_Button;