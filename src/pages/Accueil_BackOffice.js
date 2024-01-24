import React, { useEffect } from 'react';
import '../assets/css/style.css';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header_Profil from '../components/Header_Profil';
import '../assets/fontawesome-5/css/all.css';
import Welcome_Container from '../components/Welcome_Container';
import Side_Card_Container from '../components/Side_Card_Container';
import Card from '../components/Card';
import Card_Details from '../components/Card_Details';

const Accueil_BackOffice = () => {
    useEffect(() => {
        document.title = 'Accueil - BackOffice';
    }, []);
    return (
        <div className='page'>
            <Header_Profil link='/accueilBack' logo = "/assets/img/PNG/Logo.png" description = "Logo" icon = 'fas fa-user-circle' pseudo = 'Profil' lien1 = '/ficheProfil' text1 = 'Voir ma fiche' lien2 = '#' text2 = 'Se déconnecter'/>
            <main className='Landing'>
                <section className='MidLeft'>
                    <Welcome_Container text = 'Bienvenue sur Farm Game'>
                        <p>Vous êtes actuellement dans le menu administrateur de votre partie.<br/>Ici vous pouvez créer et gérer vos différentes cultures. Vous pouvez en créer, en modifier ou encore en supprimer.<br/>Dans ce menu, vous pouvez interférer sur la validation de vos terrains, voir vos statistiques et interférer sur vos cultures.</p>
                        <section>
                            <Button link='/insertCulture' text ='Ajouter une culture'/>
                            <Button link='/validerTerrain' text ='Valider un terrain'/>
                            <Button link='/stats' text ='Voir les statistiques'/>
                        </section>
                    </Welcome_Container>
                    <section className='BottomLeft'>
                        <Card_Details text1 = 'Localisation : Lorem' text2 = 'Etat : Validé'/>
                        <Card_Details text1 = 'Localisation : Lorem' text2 = 'Etat : Validé'/>
                        <Card_Details text1 = 'Localisation : Lorem' text2 = 'Etat : Validé'/>
                    </section>
                </section>
                <section className='MidRight'>
                    <Side_Card_Container>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Side_Card_Container>
                </section>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"></Footer>
        </div>
    );
};

export default Accueil_BackOffice;