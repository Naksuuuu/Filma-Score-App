import { FilmApi } from "@/api/film";
import { useQuery } from "@tanstack/react-query";

export const FILM_KEY = {
  popular: () => ["popular"] as const,
  topRated: () => ["top_rated"] as const,
  allMovies: (page: number, genreIds?: number[]) => ["all_movies", page, genreIds] as const,
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

export function useAllMovies(page: number, genreIds?: number[]) {
  return useQuery({
    queryKey: FILM_KEY.allMovies(page, genreIds),
    queryFn: () => FilmApi.getAllMovies(page, genreIds),
  });
}

export function useGenreMovies() {
  return useQuery({
    queryKey: FILM_KEY.listGenreMovies(),
    queryFn: () => FilmApi.getListGenre(),
  });
}
