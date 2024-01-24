import React, { useEffect } from 'react';
import Header_Sub from '../components/Header_Sub';
import '../assets/css/style.css';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Pic_Container from '../components/Pic_Container';
import Button from '../components/Button';

const Connexion = () => {
    useEffect(() => {
        document.title = 'Se connecter';
    }, []);
    return (
        <div className='page'>
            <Header_Sub logo = "/assets/img/PNG/Logo.png" description = "Logo"/>
            <main className='formClass'>
                <section className='left'>
                    <h1>Se Connecter</h1>
                    <p className='desc'>Bienvenue sur Farm Game : le jeu de simulation de culture sur terrain.<br/>Sur ce site, vous êtes libre de personnaliser votre expérience à volonté en allant de créer vos cultures jusqu’à<br/>interagir avec d’autres utilisateurs.</p>
                    <Container>
                        <form method='post' className='login'>
                            <p className='First'>Mail : <input type='mail' name='mail'/></p>
                            <p>Mot de passe : <input id='pwd' type='password' name='motDePasse'/></p>
                            <p className='link'><a href='/inscription'>Vous n’avez pas de compte ? Inscrivez-vous en appuyant ici</a></p>
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

export default Connexion;