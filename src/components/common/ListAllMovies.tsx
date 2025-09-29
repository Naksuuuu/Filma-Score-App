import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, Calendar, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import type { listGenreType, topRatedMoviesType } from "@/api/type";
import { useGenreMovies } from "@/hooks/useFilmQuery";
import ListPagination from "./ListPagination";

interface ListAllMoviesProps {
  titlePage: string;
  useAllMovies: (
    page: number,
    genreId: number[]
  ) => {
    data?: topRatedMoviesType;
    isLoading: boolean;
    error?: unknown;
  };
}

const ListAllMovies = ({ titlePage, useAllMovies, className }: React.ComponentProps<"div"> & ListAllMoviesProps) => {
  const [page, setPage] = useState<number>(1);

  const [selectedIdGenre, setSelectedIdGenre] = useState<number[]>([]);
  const rawMovies = useAllMovies(page, selectedIdGenre);
  const [movies, setMovies] = useState<topRatedMoviesType | null>(null);
  const [genre, setGenre] = useState<listGenreType | null>(null);

  const listGenre = useGenreMovies();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const genreId = Number(e.target.value);
    setPage(1);

    setSelectedIdGenre((prev) => (prev.includes(genreId) ? prev.filter((id) => id !== genreId) : [...prev, genreId]));
  };

  useEffect(() => {
    if (rawMovies.data) {
      setMovies(rawMovies.data);
    }

    if (listGenre.data) {
      setGenre(listGenre.data);
    }
  }, [rawMovies.data, listGenre.data]);

  if (rawMovies.error) {
    return (
      <div>
        <p>gagal fetch</p>
      </div>
    );
  }

  return (
    <div className={`container mx-auto flex flex-col gap-6 ${className}`}>
      <h2 className="text-self-primary text-3xl flex items-center gap-4">
        <Bookmark fill="currentColor" className="h-15 w-15" /> {titlePage}
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        {genre &&
          genre.genres.map((g) => (
            <label key={g.id} className="cursor-pointer">
              <input type="checkbox" value={g.id} className="hidden peer" onChange={handleChange} />
              <div className="px-4 py-2 rounded-lg border-2 border-blue-500 bg-blue-500 text-white transition-all hover:bg-blue-600 peer-checked:bg-black peer-checked:border-black peer-checked:text-white">
                {g.name}
              </div>
            </label>
          ))}
      </div>

      <ListPagination page={page} setPage={setPage} />

      <div className="flex flex-wrap flex-col justify-center sm:flex-row gap-4 scrollbar-hide">
        {movies?.results &&
          movies.results.map((movie) => {
            return (
              <Card
                key={movie.id}
                className="w-full sm:w-[250px] h-[150px] sm:h-[600px] flex flex-row sm:flex-col justify-start py-0 overflow-hidden shadow-md"
              >
                <div className="relative flex-shrink-0 w-24 h-37 sm:w-full sm:h-auto">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    className="object-cover w-full h-full rounded-l-lg sm:rounded-l-none sm:rounded-t-lg"
                  />
                </div>
                <div className="h-full w-full p-2 sm:p-0 flex flex-col justify-start">
                  <CardHeader className="sm:basis-1/2 flex items-start p-0 sm:px-6 sm:pt-6">
                    <CardTitle className="w-full text-sm sm:text-lg font-bold leading-tight line-clamp-4 group-hover:text-primary transition-colors">
                      {movie.title}
                      <br />
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <span className="text-xs sm:text-sm text-muted-foreground font-normal flex items-center gap-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> {movie.release_date}
                        </span>

                        <div className="flex items-center gap-1 text-xs sm:text-sm font-medium">
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                          <span className="text-foreground">{movie.vote_average.toFixed(1)}</span>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col justify-end p-0 sm:p-6 mt-1 sm:mt-0 sm:pt-0">
                    <div className="line-clamp-2">{movie.overview}</div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
      </div>

      <ListPagination page={page} setPage={setPage} />
    </div>
  );
};

export default ListAllMovies;
