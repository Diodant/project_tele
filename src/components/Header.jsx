import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" className="logo-link">Logo</NavLink>
      </div>
      <nav className="navbar">
        <NavLink to="/about" className="nav-link" activeClassName="active-link">О премии</NavLink>
        <NavLink to="/challenges" className="nav-link" activeClassName="active-link">Challenges</NavLink>
        <NavLink to="/plans" className="nav-link" activeClassName="active-link">Plans</NavLink>
        <NavLink to="/trainers" className="nav-link" activeClassName="active-link">Trainers</NavLink>
        <NavLink to="/groups" className="nav-link" activeClassName="active-link">Groups</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
