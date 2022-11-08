export const movies = [
  {
    id: 1,
    title: 'Friends',
    genre: 'comedy',
  },
  {
    id: 2,
    title: 'Twin Peaks',
    genre: 'horror',
  },
  {
    id: 3,
    title: 'How I Met Your Mother',
    genre: 'comedy',
  },
  {
    id: 4,
    title: 'Breaking Bad',
    genre: 'crime',
  },
  {
    id: 5,
    title: 'Stranger Things',
    genre: 'horror',
  },
  {
    id: 6,
    title: 'Dexter',
    genre: 'crime',
  },
  {
    id: 7,
    title: 'The Big Bang Theory',
    genre: 'comedy',
  },
  {
    id: 8,
    title: 'Money Heist',
    genre: 'crime',
  },
];

export const genres = [...new Set(movies.map((movie) => movie.genre))];
