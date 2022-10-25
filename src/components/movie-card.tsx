import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, genre } = movie;
  return (
    <div className="card">
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">{genre}</div>
      </div>
    </div>
  );
};

export default MovieCard;
