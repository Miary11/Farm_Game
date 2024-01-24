import '../assets/css/style.css';
import Button from '../components/Button';
import React from 'react';

function Profil_Menu(props) {
    return (
        <section className='profilMenu'>
            <article>
                <div className='navLeft'>
                    <i className={props.icon}></i>
                </div>
                <div className='navRight'>
                    <p>{props.pseudo}</p>
                </div>
            </article>
            <nav>
                <p className='firstNav'><Button link = {props.lien1} text = {props.text1}/></p>
                <p><Button link = {props.lien2} text = {props.text2}/></p>
            </nav>
        </section>
    );
}

export default Profil_Menu;