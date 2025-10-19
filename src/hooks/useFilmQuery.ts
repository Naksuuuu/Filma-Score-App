import { FilmApi } from "@/api/film";
import { useQuery } from "@tanstack/react-query";

export const FILM_KEY = {
  popular: () => ["popular"] as const,
  topRated: () => ["top_rated"] as const,
  allTopRatedMovies: (page: number, genreIds?: number[]) => ["all_top_rated_movies", page, genreIds] as const,
  allPopularMovies: (page: number, genreIds?: number[]) => ["all_popular_movies", page, genreIds] as const,
  moviesBySearch: (query: string) => ["movies_by_search", query] as const,
  listGenreMovies: () => ["list_genre"] as const,
} as const;

export function usePopularMovie() {
  return useQuery({
    queryKey: FILM_KEY.popular(),
    queryFn: () => FilmApi.getPopularMovie(),
  });
}

export function useTopRatedMovie() {
  return useQuery({
    queryKey: FILM_KEY.topRated(),
    queryFn: () => FilmApi.getTopRatedMovie(),
  });
}

export function useAllTopRatedMovies(page: number, genreIds?: number[]) {
  return useQuery({
    queryKey: FILM_KEY.allTopRatedMovies(page, genreIds),
    queryFn: () => FilmApi.getAllTopRatedMovies(page, genreIds),
  });
}

export function useAllPopularMovies(page: number, genreIds?: number[]) {
  return useQuery({
    queryKey: FILM_KEY.allPopularMovies(page, genreIds),
    queryFn: () => FilmApi.getAllPopularMovies(page, genreIds),
  });
}

export function useMoviesBySearch(query: string) {
  return useQuery({
    queryKey: FILM_KEY.moviesBySearch(query),
    queryFn: () => FilmApi.getMoviesBySearch(query),
  });
}

export function useGenreMovies() {
  return useQuery({
    queryKey: FILM_KEY.listGenreMovies(),
    queryFn: () => FilmApi.getListGenre(),
  });
}
