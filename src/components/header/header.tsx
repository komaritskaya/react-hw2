import React from 'react';
import logo from '../../assets/img/logo.svg';
import Search from '../search/search';
import './header.css';

interface HeaderProps {
  handleSearchSubmit: (arg0: string) => void;
}

const Header = ({ handleSearchSubmit }: HeaderProps) => (
  <header className="page-header">
    <div className="page-header__container container">
      <div className="page-header__upper">
        <img src={logo} alt="Netflix Roulette logo" className="page-header__logo" />
        <button type="button" className="page-header__add-button">+ Add movie</button>
      </div>
      <h1 className="page-header__title">Find your movie</h1>
      <Search handleSubmit={handleSearchSubmit} />
    </div>
  </header>
);

export default Header;
