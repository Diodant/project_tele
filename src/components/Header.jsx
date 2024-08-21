import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const scrollToFooter = (e) => {
    e.preventDefault();
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" className="logo-link">Logo</NavLink>
      </div>
      <nav className="navbar">
        <NavLink to="/about" className="nav-link" activeClassName="active-link">О премии</NavLink>
        <NavLink to="/winners" className="nav-link" activeClassName="active-link">Победители</NavLink>
        <NavLink to="/jury" className="nav-link" activeClassName="active-link">Жюри</NavLink>
        <NavLink to="/gallery" className="nav-link" activeClassName="active-link">Фото</NavLink>
        <a href="#footer" className="nav-link" onClick={scrollToFooter}>Контакты</a>
      </nav>
    </header>
  );
};

export default Header;
