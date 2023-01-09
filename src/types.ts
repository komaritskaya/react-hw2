export interface Movie {
  id: number;
  title: string;
  tagline: string;
  posterPath: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: Date;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface RawMovie {
  id: number;
  title: string;
  tagline: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export enum SortType {
  Date = 'date',
  Asc = 'asc',
  Desc = 'desc',
}
