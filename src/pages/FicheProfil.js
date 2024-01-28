import React, { useEffect,useState } from 'react';
import '../assets/css/style.css';
import Footer from '../components/Footer';
// import Button from '../components/Button';
import HeaderProfil from '../components/HeaderProfil';
import '../assets/fontawesome-5/css/all.css';
import SideCardContainer from '../components/SideCardContainer';
import Card from '../components/Card';
import CardDetails from '../components/CardDetails';
import SmallSideContainer from '../components/SmallSideContainer';
import ProfilFiche from '../components/ProfilFiche';
import {deconnexion} from '../assets/js/Function';

const FicheProfil = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        document.title = 'Ma fiche';
        const userDataString = localStorage.getItem('userData');
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);
    }, []);

    console.log('User Data:', userData);

    if (!userData) {
        return null;
    }

    return (
        <div className='page'>
            <HeaderProfil link='/accueilBack' logo = "/assets/img/PNG/Logo.png" description = "Logo" icon = 'fas fa-user-circle' pseudo = {userData[0].pseudo} lien1 = '/ficheProfil' text1 = 'Voir ma fiche' lien2 = {deconnexion} text2 = 'Se déconnecter'/>
            <main className='formInsClass'>
                <section className='FormLeft'>
                    <h1>Fiche profil</h1>
                    <p className='desc2'>Voici les informations importantes sur votre profil.</p>
                    <section className='fiche'>
                        <ProfilFiche icon = 'fas fa-user-circle' pseudo = {userData[0].pseudo} text = 'Portefeuille : 0 Ar'/>
                    </section>
                </section>
                <section className='SideLeft'>
                    <SideCardContainer>
                        <Card/>
                        <Card/>
                        <Card/>
                    </SideCardContainer>
                </section>
                <section className='SideRight'>
                    <SmallSideContainer titre = 'Cultures'>
                        <CardDetails text1 = 'Lorem'/>
                        <CardDetails text1 = 'Lorem'/>
                        <CardDetails text1 = 'Lorem'/>
                        <CardDetails text1 = 'Lorem'/>
                        <CardDetails text1 = 'Lorem'/>
                        <CardDetails text1 = 'Lorem'/>
                    </SmallSideContainer>
                </section>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"></Footer>
        </div>
    );
};

export default FicheProfil;