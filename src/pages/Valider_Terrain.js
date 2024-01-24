import React, { useEffect } from 'react';
import '../assets/css/style.css';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header_Profil from '../components/Header_Profil';
import '../assets/fontawesome-5/css/all.css';
import Side_Card_Container from '../components/Side_Card_Container';
import Card from '../components/Card';
import Card_Details from '../components/Card_Details';
import Small_Side_Container from '../components/Small_Side_Container';

const Valider_Terrain = () => {
    useEffect(() => {
        document.title = 'Valider un terrain';
    }, []);
    return (
        <div className='page'>
            <Header_Profil link='/accueilBack' logo = "/assets/img/PNG/Logo.png" description = "Logo" icon = 'fas fa-user-circle' pseudo = 'Profil' lien1 = '/ficheProfil' text1 = 'Voir ma fiche' lien2 = '#' text2 = 'Se déconnecter'/>
            <main className='formInsClass'>
                <section className='FormLeft'>
                    <h1>Valider un terrain</h1>
                    <p className='desc2'>Dans ce menu, vous pouvez valider un terrain qui a été créé par vos soins.<br/>Pour faire cela veuillez remplir les champs ci-dessous.</p>
                    <form method='get' className='Insert'>
                        <p className='tFirst'>Terrain : 
                            <select name='terrain'>
                                <option value = 'Tout'>Tout</option>
                            </select>
                        </p>
                        <Button link = '#' text = 'Valider'/>
                    </form>
                </section>
                <section className='SideLeft'>
                    <Side_Card_Container>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Side_Card_Container>
                </section>
                <section className='SideRight'>
                    <Small_Side_Container titre = 'Saisons'>
                        <Card_Details text1 = 'Début : Lorem' text2 = 'Fin : Lorem'/>
                        <Card_Details text1 = 'Début : Lorem' text2 = 'Fin : Lorem'/>
                        <Card_Details text1 = 'Début : Lorem' text2 = 'Fin : Lorem'/>
                        <Card_Details text1 = 'Début : Lorem' text2 = 'Fin : Lorem'/>
                    </Small_Side_Container>
                </section>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"></Footer>
        </div>
    );
};

export default Valider_Terrain;