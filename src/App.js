import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Jury from './components/Jury';
import Winners from './components/Winners';
import About from './components/About';
import CriteriaPage from './components/CriteriaPage';
import PositionPage from './components/PositionPage';
import PhotoGalleryPage from './components/PhotoGalleryPage';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
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
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/gallery" element={<PhotoGalleryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
