import { Calendar, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, type FormEvent } from "react";
import { useMoviesBySearch } from "@/hooks/useFilmQuery";
import type { SearchMovieType } from "@/api/type";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const SearchInput = ({ className }: React.ComponentProps<"div">) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const seacrhMovies = useMoviesBySearch(searchValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchValue);
  };

  useEffect(() => {
    if (seacrhMovies.data) {
      console.log(seacrhMovies.data);
    }
  }, [seacrhMovies]);

  return (
    <div className={`w-full max-w-lg ${className} relative`}>
      <form onSubmit={(e) => handleSubmit(e)} className="relative flex items-center">
        <div className="absolute left-3 z-10">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>

        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Movies"
          className="pl-10 pr-20 rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <Button className="rounded-l-none px-4 bg-self-primary" type="submit">
          Search
        </Button>
      </form>
      <div className="absolute z-50 bg-background w-full p-6 flex flex-col gap-2 max-h-[600px] overflow-y-scroll rounded-b-xl ">
        {seacrhMovies.data &&
          seacrhMovies.data?.results.map((movie: SearchMovieType) => {
            return (
              <Card
                key={movie.id}
                className="w-full h-[150px] shrink-0 flex flex-row justify-start py-0 overflow-hidden shadow-md"
              >
                <div className="relative flex-shrink-0 w-24 h-37">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    className="object-cover w-full h-full rounded-l-lg"
                  />
                </div>
                <div className="h-full w-full p-2 flex flex-col justify-start">
                  <CardHeader className="flex items-start p-0">
                    <CardTitle className="w-full text-sm font-bold leading-tight line-clamp-4 group-hover:text-primary transition-colors">
                      {movie.title}
                      <br />
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <span className="text-xs text-muted-foreground font-normal flex items-center gap-2">
                          <Calendar className="w-3 h-3" /> {movie.release_date}
                        </span>

                        <div className="flex items-center gap-1 text-xs font-medium">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-foreground">{movie.vote_average.toFixed(1)}</span>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col justify-end p-0 mt-1">
                    <div className="line-clamp-2">{movie.overview}</div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default SearchInput;
