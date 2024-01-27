import '../assets/css/style.css';
import React from 'react';
import Profil_Menu from './Profil_Menu';

function Header_Profil(props) {
    return (
        <header className='header2'>
            <div className='LeftTop'>
              <a href={props.link}><img src = {props.logo} alt = {props.description}/></a>
            </div>
            <div className='RightTop'>
                <Profil_Menu icon = {props.icon} pseudo = {props.pseudo} lien1 = {props.lien1} text1 = {props.text1} lien2 = {props.lien2} fonction = {props.fonction} text2 = {props.text2}/>
            </div>
        </header> 
    );
}

export default Header_Profil;