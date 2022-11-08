import { Movie, RawMovie } from './types';

const adaptMovieToClient = (movie: RawMovie): Movie => {
  const adaptedMovie = {
    ...movie,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
    releaseDate: new Date(movie.release_date),
    posterPath: movie.poster_path,
  };

  delete adaptedMovie.vote_average;
  delete adaptedMovie.vote_count;
  delete adaptedMovie.release_date;
  delete adaptedMovie.poster_path;

  return adaptedMovie;
};

export default adaptMovieToClient;
