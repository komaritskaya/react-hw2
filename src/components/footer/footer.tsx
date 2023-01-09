import React from 'react';
import logo from '../../assets/img/logo.svg';
import './footer.css';

const Footer = () => (
  <footer className="page-footer">
    <div className="page-footer__container container">
      <img src={logo} alt="Netflix Roulette logo" className="page-footer__logo" />
    </div>
  </footer>
);

export default Footer;
