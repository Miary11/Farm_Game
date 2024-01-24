import '../assets/css/style.css';
import Button from '../components/Button';
import React from 'react';

function Profil_Fiche(props) {
    return (
        <div className='profil'>
            <section className='profilTop'>
                <article>
                    <div className='navLeft'>
                        <i className={props.icon}></i>
                    </div>
                    <div className='navRight'>
                        <p>{props.pseudo}</p>
                    </div>
                </article>
            </section>
            <section className='profilBottom'>
                <p>{props.text}</p>
            </section>
        </div>
    );
}

export default Profil_Fiche;