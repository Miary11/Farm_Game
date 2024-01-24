import React, { useEffect } from 'react';
import '../assets/css/style.css';
import Footer from '../components/Footer';
import Header_Profil from '../components/Header_Profil';
import '../assets/fontawesome-5/css/all.css';
import Container from '../components/Container';

const Statistiques = () => {
    useEffect(() => {
        document.title = 'Statistiques';
    }, []);
    return (
        <div className='page'>
            <Header_Profil link='/accueilBack' logo = "/assets/img/PNG/Logo.png" description = "Logo" icon = 'fas fa-user-circle' pseudo = 'Profil' lien1 = '/ficheProfil' text1 = 'Voir ma fiche' lien2 = '#' text2 = 'Se déconnecter'/>
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
                            <p>Chiffres d’affaires (en milliers d’Ariary)</p>
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