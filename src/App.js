import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Jury from './components/Jury';
import Winners from './components/Winners';
import About from './components/About';
import CriteriaPage from './components/CriteriaPage';
import PositionPage from './components/PositionPage';
import PhotoGalleryPage from './components/PhotoGalleryPage';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/about" element={<About />} />
        <Route path="/criteria" element={<CriteriaPage />} /> 
        <Route path="/position" element={<PositionPage />} />
        <Route path="/gallery" element={<PhotoGalleryPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
