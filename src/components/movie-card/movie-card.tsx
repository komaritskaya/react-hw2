import React, { useState } from 'react';
import './movie-card.css';
import defaultImage from '../../assets/img/default-movie.svg';
import { Movie } from '../../types';

interface MovieCardProps {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [noImg, setNoImg] = useState(false);

  const {
    title, genres, posterPath, releaseDate,
  } = movie;
  return (
    <div className="movie-card">
      {
        !noImg
          ? <img className="movie-card__img" src={posterPath} alt={title} onError={() => setNoImg(true)} />
          : <img className="movie-card__img" src={defaultImage} alt={title} />
      }
      <div className="movie-card__content">
        <div className="movie-card__info">
          <div className="movie-card__title">{title}</div>
          <div className="movie-card__genre">{genres.join(', ')}</div>
        </div>
        <div className="movie-card__year">{releaseDate.getFullYear()}</div>
      </div>
    </div>
  );
};

export default MovieCard;
