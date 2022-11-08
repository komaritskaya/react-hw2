import React from 'react';
import { SortType } from '../../types';
import GenresList from '../genres-list/genres-list';
import Sort from '../sort/sort';
import './navbar.css';

interface NavbarProps {
  activeGenre: string;
  activeSortType: SortType;
  handleGenreToggle: (arg0: string) => void;
  handleSortChange: (arg0: SortType) => void;
}

const Navbar = ({
  activeGenre,
  activeSortType,
  handleGenreToggle,
  handleSortChange,
}: NavbarProps) => (
  <div className="navbar">
    <GenresList activeGenre={activeGenre} handleToggle={handleGenreToggle} />
    <Sort activeSortType={activeSortType} handleChange={handleSortChange} />
  </div>
);

export default Navbar;
