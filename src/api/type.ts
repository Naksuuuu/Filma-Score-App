interface itemMoviesType {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
}

export interface MoviesType {
  page: number;
  results: itemMoviesType[];
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

export interface SearchMovieType extends itemMoviesType {
  adult: boolean;
}

export interface SearchMoviesType extends Omit<MoviesType, "results"> {
  result: SearchMovieType[];
}
