import { FilmApi } from "@/api/film";
import { useQuery } from "@tanstack/react-query";

export const FILM_KEY = {
  popular: () => ["popular"] as const,
} as const;

export function usePopularMovie() {
  return useQuery({
    queryKey: FILM_KEY.popular(),
    queryFn: () => FilmApi.getPopularMovie(),
  });
}
