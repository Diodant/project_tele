import React from 'react';
import { FaVk, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">Мы ждем вас</h3>
          <p>ул. Арбат, 1а, Москва, 119019, Россия</p>
          <p>info@mysite.ru</p>
          <p>т. +7 123 456-78-90</p>
          <div className="social-icons">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" aria-label="VK">
              <FaVk />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Имя</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Фамилия</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Эл. почта *</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="message">Текст сообщения...</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
          </div>
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Телетриумф. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
