import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.jpg';

const Header = () => {
  const scrollToFooter = (e) => {
    e.preventDefault();
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">
      <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" /> 
        </NavLink>
      </div>
      <nav className="navbar">
      <NavLink to="/" className="nav-link" activeClassName="active-link">Главная</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active-link">О премии</NavLink>
        <NavLink to="/winners" className="nav-link" activeClassName="active-link">Победители</NavLink>
        <NavLink to="/jury" className="nav-link" activeClassName="active-link">Жюри</NavLink>
        <NavLink to="/gallery" className="nav-link" activeClassName="active-link">Фото</NavLink>
        <NavLink to="/articles" className="nav-link" activeClassName="active">Новости</NavLink>
        <a href="#footer" className="nav-link" onClick={scrollToFooter}>Контакты</a>
      </nav>
    </header>
  );
};

export default Header;
