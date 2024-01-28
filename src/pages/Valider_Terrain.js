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
import {getUserCulture,deconnexion} from '../assets/js/Function';

const Valider_Terrain = () => {
    const [userData, setUserData] = useState(null);
    const [saisonData, setSaisonData] = useState(null);
    const [cultureData, setCultureData] = useState(null);

    useEffect(() => {
        document.title = 'Valider un terrain';
        const userDataString = localStorage.getItem('userData');
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);
        const saisonDataString = localStorage.getItem('saisonData');
        const parsedSaisonData = JSON.parse(saisonDataString);
        setSaisonData(parsedSaisonData);

        const fetchData = async () => {
            try {
                const userCultureData = await getUserCulture(parsedUserData[0].id);
                setCultureData(userCultureData);
            } catch (error) {
                console.error('Error fetching user culture:', error);
            }
        };

        fetchData();
    }, []);

    console.log('User Data:', userData);

    if (!userData || !saisonData) {
        return null;
    }
    
    return (
        <div className='page'>
            <Header_Profil link='/accueilBack' logo = "/assets/img/PNG/Logo.png" description = "Logo" icon = 'fas fa-user-circle' pseudo = {userData[0].pseudo} lien1 = '/ficheProfil' text1 = 'Voir ma fiche' lien2 = {deconnexion} text2 = 'Se déconnecter'/>
            <main className='formInsClass'>
                <section className='FormLeft'>
                    <h1>Valider un terrain</h1>
                    <p className='desc2'>Dans ce menu, vous pouvez valider un terrain qui a été créé par vos soins.<br/>Pour faire cela veuillez remplir les champs ci-dessous.</p>
                    <form method='put' className='Insert'>
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
                    {cultureData && cultureData.map((culture) => (
                        <Card key={culture.id} pic={`http://localhost:8080/Farm_Game/${culture.photo}`} desc={culture.nom}/>
                    ))}
                    </Side_Card_Container>
                </section>
                <section className='SideRight'>
                    <Small_Side_Container titre = 'Saisons'>
                    <Card_Details pic = "/assets/img/JPG/Winter.jpeg" text1 = {saisonData[0].debut} text2 = {saisonData[0].fin}/>
                        <Card_Details pic = "/assets/img/JPG/Spring.jpeg" text1 = {saisonData[1].debut} text2 = {saisonData[1].fin}/>
                        <Card_Details pic = "/assets/img/JPG/Summer.jpeg" text1 = {saisonData[2].debut} text2 = {saisonData[2].fin}/>
                        <Card_Details pic = "/assets/img/JPG/Fall.jpeg" text1 = {saisonData[3].debut} text2 = {saisonData[3].fin}/>
                    </Small_Side_Container>
                </section>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"></Footer>
        </div>
    );
};

export default Valider_Terrain;