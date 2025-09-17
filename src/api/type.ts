interface itemTopRatedMoviesType {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
}

export interface topRatedMoviesType {
  page: number;
  results: itemTopRatedMoviesType[];
  total_pages: number;
  total_results: number;
}
