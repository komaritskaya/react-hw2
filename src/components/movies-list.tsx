import React, { useEffect, useState } from 'react';
import { movies } from '../mock/movies';
import MovieCard from './movie-card';

interface MoviesListProps {
  filter: string;
  activeGenre: string;
}

const MoviesList = ({ filter, activeGenre }: MoviesListProps) => {
  const [shownMovies, setShownMovies] = useState(movies);

  useEffect(() => setShownMovies(
    movies.filter((movie) => (activeGenre
      ? movie.title.toLowerCase().includes(filter.toLowerCase()) && movie.genre === activeGenre
      : movie.title.toLowerCase().includes(filter.toLowerCase()))),
  ), [filter, activeGenre]);

  if (!shownMovies.length) {
    return <div>No movies found</div>;
  }

  return (
    <>
      <h2>My Watchlist</h2>
      <div className="ui cards">
        { shownMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />) }
      </div>
    </>
  );
};

export default MoviesList;
