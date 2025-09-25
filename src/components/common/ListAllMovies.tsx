import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, Calendar, Star } from "lucide-react";
import { useEffect, useState } from "react";
import type { topRatedMoviesType } from "@/api/type";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ListAllMoviesProps {
  titlePage: string;
  useGetTopMovies: (page: number) => {
    data?: topRatedMoviesType;
    isLoading: boolean;
    error?: unknown;
  };
}

const ListAllMovies = ({ titlePage, useGetTopMovies, className }: React.ComponentProps<"div"> & ListAllMoviesProps) => {
  const [page, setPage] = useState<number>(1);
  const windowSize: number = 3;
  const maxPage: number = 500;

  const getNumberPage = (current: number, total: number, size: number) => {
    let start = Math.max(current - 1, 1);
    let end = start + size - 1;

    if (end > total) {
      end = total;
      start = Math.max(end - size + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  const pages = getNumberPage(page, maxPage, windowSize);

  const rawTopMovies = useGetTopMovies(page);
  const [topMovies, setTopMovies] = useState<topRatedMoviesType | null>(null);

  useEffect(() => {
    if (rawTopMovies.data) {
      setTopMovies(rawTopMovies.data);
    }
  }, [rawTopMovies.data, page]);

  if (rawTopMovies.error) {
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

      <Pagination className="cursor-pointer">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setPage((p) => Math.min(p - 1, 1))} />
          </PaginationItem>
          {pages.map((p) => {
            return (
              <PaginationItem key={p}>
                <PaginationLink onClick={() => setPage(p)} isActive={p === page}>
                  {p}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem className="cursor-default">
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext onClick={() => setPage(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="flex flex-wrap flex-col justify-center sm:flex-row gap-4 scrollbar-hide">
        {topMovies?.results &&
          topMovies.results.map((movie) => {
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

      <Pagination className="cursor-pointer">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setPage((p) => Math.min(p - 1, 1))} />
          </PaginationItem>
          {pages.map((p) => {
            return (
              <PaginationItem key={p}>
                <PaginationLink onClick={() => setPage(p)} isActive={p === page}>
                  {p}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem className="cursor-default">
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext onClick={() => setPage(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ListAllMovies;
