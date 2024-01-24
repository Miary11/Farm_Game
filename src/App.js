import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Accueil_BackOffice from './pages/Accueil_BackOffice';
import Insert_Culture from './pages/Insert_Culture';
import Valider_Terrain from './pages/Valider_Terrain';
import Fiche_Profil from './pages/Fiche_Profil';
import Statistiques from './pages/Statistiques';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Connexion />} />
        <Route path="/inscription" element={< Inscription />} />
        <Route path="/accueilBack" element={< Accueil_BackOffice />} />
        <Route path="/insertCulture" element={< Insert_Culture />} />
        <Route path="/validerTerrain" element={< Valider_Terrain />} />
        <Route path="/ficheProfil" element={< Fiche_Profil />} />
        <Route path="/stats" element={< Statistiques />} />
      </Routes>
    </Router>
  );
}

export default App;
