import React, { useEffect, useState } from 'react';
import { movies } from '../../mock/movies';
import './movies-list.css';
import MovieCard from '../movie-card/movie-card';
import { Movie, SortType } from '../../types';

const sortMovies = (arr: Movie[], sortType: SortType) => {
  switch (sortType) {
    case SortType.Date:
      return arr.sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime());
    case SortType.Desc:
      return arr.sort((a, b) => b.title.localeCompare(a.title));
    case SortType.Asc:
    default:
      return arr.sort((a, b) => a.title.localeCompare(b.title));
  }
};

interface MoviesListProps {
  filter: string;
  activeGenre: string;
  activeSortType: SortType;
}

const MoviesList = ({ filter, activeGenre, activeSortType }: MoviesListProps) => {
  const [shownMovies, setShownMovies] = useState(movies);

  useEffect(() => setShownMovies(
    sortMovies(movies, activeSortType).filter((movie) => (activeGenre
      ? (
        movie.title.toLowerCase().includes(filter.toLowerCase())
        && movie.genres.includes(activeGenre)
      )
      : movie.title.toLowerCase().includes(filter.toLowerCase()))),
  ), [filter, activeGenre, activeSortType]);

  if (!shownMovies.length) {
    return <div>No movies found</div>;
  }

  return (
    <section className="movies-list">
      <p className="movies-list__count"><b>{shownMovies.length}</b> movies found</p>
      <div className="movies-list__grid">
        {shownMovies.map((movie) => (
          <div key={movie.id} className="movies-list__grid-item">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoviesList;
