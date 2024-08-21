import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">Контакты</h3>
          <p>Организатор Национальной премии “Телетриумф”</p>
          <p>Национальный совет Украины по вопросам телевидения и радиовещания</p>
          <p><FaMapMarkerAlt /> 01601, Киев, ул. Прорезная, 2</p>
          <p><FaGlobe /> Сайт: <a href="https://www.nrada.gov.ua/" target="_blank" rel="noopener noreferrer">https://www.nrada.gov.ua/</a></p>
          <p><FaEnvelope /> e-mail: <a href="mailto:nrada@nrada.gov.ua">nrada@nrada.gov.ua</a></p>
          <p><FaPhone /> Телефон: +380 44 278-48-89</p>
          <div className="social-icons">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
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