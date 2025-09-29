interface itemTopRatedMoviesType {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
}

export interface topRatedMoviesType {
  page: number;
  results: itemTopRatedMoviesType[];
  total_pages: number;
  total_results: number;
}

interface genreType {
  id: number;
  name: string;
}

export interface listGenreType {
  genres: genreType[];
}
