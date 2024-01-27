import React, { useEffect,useState } from 'react';
import '../assets/css/style.css';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header_Profil from '../components/Header_Profil';
import '../assets/fontawesome-5/css/all.css';
import Side_Card_Container from '../components/Side_Card_Container';
import Card from '../components/Card';
import Card_Details from '../components/Card_Details';
import Small_Side_Container from '../components/Small_Side_Container';
import Profil_Fiche from '../components/Profil_Fiche';

const Fiche_Profil = () => {
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
            <Header_Profil link='/accueilBack' logo = "/assets/img/PNG/Logo.png" description = "Logo" icon = 'fas fa-user-circle' pseudo = {userData[0].pseudo} lien1 = '/ficheProfil' text1 = 'Voir ma fiche' lien2 = '#' text2 = 'Se déconnecter'/>
            <main className='formInsClass'>
                <section className='FormLeft'>
                    <h1>Fiche profil</h1>
                    <p className='desc2'>Voici les informations importantes sur votre profil.</p>
                    <section className='fiche'>
                        <Profil_Fiche icon = 'fas fa-user-circle' pseudo = {userData[0].pseudo} text = 'Portefeuille : 0 Ar'/>
                    </section>
                </section>
                <section className='SideLeft'>
                    <Side_Card_Container>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Side_Card_Container>
                </section>
                <section className='SideRight'>
                    <Small_Side_Container titre = 'Cultures'>
                        <Card_Details text1 = 'Lorem'/>
                        <Card_Details text1 = 'Lorem'/>
                        <Card_Details text1 = 'Lorem'/>
                        <Card_Details text1 = 'Lorem'/>
                        <Card_Details text1 = 'Lorem'/>
                        <Card_Details text1 = 'Lorem'/>
                    </Small_Side_Container>
                </section>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"></Footer>
        </div>
    );
};

export default Fiche_Profil;