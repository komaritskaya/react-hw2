import React from 'react';
import { genres } from '../../mock/movies';
import './genres-list.css';

interface GenresListProps {
  activeGenre: string;
  handleToggle: (arg0: string) => void;
}

const GenresList = ({ activeGenre, handleToggle }: GenresListProps) => (
  <div className="genres-list">
    <button
      type="button"
      key="all"
      className={`genres-list__item${!activeGenre ? ' genres-list__item--active' : ''}`}
      onClick={() => handleToggle('')}
    >
      all
    </button>
    {
        genres.map((genre: string) => (
          <button
            type="button"
            key={genre}
            className={`genres-list__item${activeGenre === genre ? ' genres-list__item--active' : ''}`}
            onClick={() => handleToggle(genre)}
          >
            {genre}
          </button>
        ))
    }
  </div>
);

export default GenresList;
