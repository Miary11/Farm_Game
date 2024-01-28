import React, { useEffect,useState } from 'react';
import '../assets/css/style.css';
import Footer from '../components/Footer';
import HeaderProfil from '../components/HeaderProfil';
import '../assets/fontawesome-5/css/all.css';
import Container from '../components/Container';
import {deconnexion} from '../assets/js/Function';

const Statistiques = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        document.title = 'Statistiques';
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
            <main className='noGridMain'>
                <h1>Statistiques</h1>
                <p>Dans ce menu, vous pouvez voir les statistiques reliées à votre profil.</p>
                <Container id = 'statsContainer'>
                    <Container id = 'statsLeft'>
                        <p>Cultures</p>
                        <h1>5</h1>
                    </Container>
                    <section className='MidLeft'>
                        <Container id = 'statsMidLeftTop'>
                            <p>Terrains</p>
                            <h1>5</h1>
                        </Container>
                        <Container id = 'statsMidLeftBottom'>
                            <p>Nombre moyen de parcelles / Terrain </p>
                            <h1>5</h1>
                        </Container>
                    </section>
                    <Container id = 'MidRight'>
                        <p>Surface de parcelle<br/>moyenne (en mètre carré)</p>
                        <h1>5</h1>
                    </Container>
                    <section className='statsRight'>
                        <Container id = 'statsRightTop'>
                            <p>Simulations</p>
                            <h1>5</h1>
                        </Container>
                        <Container id = 'statsRightBottom'>
                            <p>Rendement moyen</p>
                            <h1>5</h1>
                        </Container>
                    </section>
                </Container>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"></Footer>
        </div>
    );
};

export default Statistiques;