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

const Insert_Culture = () => {
    useEffect(() => {
        document.title = 'Insérer une culture';
    }, []);
    return (
        <div className='page'>
            <Header_Profil link='/accueilBack' logo = "/assets/img/PNG/Logo.png" description = "Logo" icon = 'fas fa-user-circle' pseudo = 'Profil' lien1 = '/ficheProfil' text1 = 'Voir ma fiche' lien2 = '#' text2 = 'Se déconnecter'/>
            <main className='formInsClass'>
                <section className='FormLeft'>
                    <h1>Insérer une culture</h1>
                    <p className='desc2'>Dans ce menu, vous pouvez créer une culture qui vous sera propre et qui sera uniquement visible sur votre profil.<br/>Pour faire cela veuillez remplir les champs ci-dessous.</p>
                    <form method='get' className='Insert'>
                        <p id='InsFirst'>Nom : <input type = 'text' name='nom'/></p>
                        <p>Type : 
                            <select name='type'>
                                <option value = 'Tout'>Tout</option>
                            </select>
                        </p>
                        <p>Prix d'achat (/kg) : <input id='pA' type='number' name='prixAchat'/></p>
                        <p>Prix de vente (/kg) : <input id='pV' type='number' name='prixVente'/></p>
                        <p>Saison : 
                            <select name='saison' id='sA'>
                                <option value = 'Tout'>Tout</option>
                            </select>
                        </p>
                        <p>Sélectionner une photo : <input type ='file' name = 'photo'/></p>
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

export default Insert_Culture;