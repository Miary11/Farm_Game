import React, { useEffect } from 'react';
import Header_Sub from '../components/Header_Sub';
import '../assets/css/style.css';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Pic_Container from '../components/Pic_Container';
import Button from '../components/Button';

const Inscription = () => {
    useEffect(() => {
        document.title = 'S\'inscrire';
    }, []);
    return (
        <div className='page'>
            <Header_Sub logo = "/assets/img/PNG/Logo.png" description = "Logo"/>
            <main className='formClass'>
                <section className='left'>
                    <h1>S’inscrire</h1>
                    <p className='desc'>Bienvenue sur Farm Game : le jeu de simulation de culture sur terrain.<br/>Inscrivez vous en remplissant les champs ci-dessous.</p>
                    <Container id="inscr">
                        <form method='post' className='login'>
                            <p id='First'>Nom : <input type='text' name='nom'/></p>
                            <p>Prénom : <input id='pr' type='text' name='prenom'/></p>
                            <p>Date de naissance : <input id='dN' type='date' name='naissance'/></p>
                            <p>Mail : <input id='ma' type='mail' name='mail'/></p>
                            <p>Mot de passe : <input id='mdp' type='password' name='mdp'/></p>
                            <p>Pseudo : <input id='ps' type='text' name='pseudo'/></p>
                            <Button link = '#' text = 'Valider'></Button>
                        </form>
                    </Container>
                </section>
                <section className='right'>
                    <Pic_Container></Pic_Container>
                </section>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"></Footer>
        </div>
    );
};

export default Inscription;