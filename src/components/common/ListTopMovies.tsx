import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, Calendar, Star } from "lucide-react";
import { useEffect, useState } from "react";
import type { topRatedMoviesType } from "@/api/type";

interface ListTopMoviesProps {
  titlePage: string;
  useGetTopMovies: () => {
    data?: topRatedMoviesType;
    isLoading: boolean;
    error?: unknown;
  };
}

const ListTopMovies = ({ titlePage, useGetTopMovies }: ListTopMoviesProps) => {
  const rawTopMovies = useGetTopMovies();
  const [topMovies, setTopMovies] = useState<topRatedMoviesType | null>(null);

  useEffect(() => {
    if (rawTopMovies.data) {
      setTopMovies(rawTopMovies.data);
      console.log(rawTopMovies.data.results);
    }
  }, [rawTopMovies.data]);

  return (
    <div className="container mx-auto flex flex-col gap-6">
      <h2 className="text-self-primary text-3xl flex items-center gap-4">
        <Bookmark fill="currentColor" className="h-15 w-15" /> {titlePage}
      </h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {topMovies?.results &&
          topMovies.results.map((movie) => {
            return (
              <div key={movie.id}>
                <Card className="w-[250px] h-[700px] flex flex-col justify-start pt-0 overflow-hidden">
                  <div className="relative">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title} poster`}
                      className="object-cover "
                    />
                    {/* <div className="absolute z-50 -bottom-5 right-3 h-10 w-10 rounded-full">
                      <div className="backdrop:blur-3xl ">
                        <Star className="w-5 h-5 fill-current " />

                        {movie.vote_average.toFixed(1)}
                      </div>
                    </div> */}
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {movie.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 pb-3">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{movie.overview}</p>
                  </CardContent>

                  <CardFooter className="pt-3 border-t flex justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{movie.release_date}</span>
                    </div>
                    <div className="backdrop:blur-3xl ">
                      <Star className="w-5 h-5 text-self-primary fill-self-primary  " />

                      {movie.vote_average.toFixed(1)}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListTopMovies;
