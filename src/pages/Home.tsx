import type { topRatedMoviesType } from "@/api/type";
import SearchInput from "@/components/common/SearchInput";
import Hero from "@/components/home-page/Hero";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTopRatedMovie } from "@/hooks/useFilmQuery";
import { Badge, Bookmark, Calendar, Star } from "lucide-react";

const Home = () => {
  const rawTopRatedMovies = useTopRatedMovie();
  const topRatedMovies: topRatedMoviesType = rawTopRatedMovies.data;

  console.log(topRatedMovies);

  return (
    <>
      <Hero />
      <div className="min-h-screen flex flex-col">
        <div className="w-full">
          <div className="flex justify-center mb-12">
            <SearchInput />
          </div>
        </div>

        <div className="container mx-auto flex flex-col gap-6">
          <h2 className="text-self-primary text-3xl flex items-center gap-4">
            <Bookmark fill="currentColor" className="h-15 w-15" /> Top Rate Movies
          </h2>

          <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
            {topRatedMovies?.results &&
              topRatedMovies.results.map((movie) => {
                return (
                  <div key={movie.id}>
                    <Card className="w-[250px] h-[700px] flex flex-col justify-start pt-0 overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={`${movie.title} poster`}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className={` text-white text-xs px-2 py-1 flex items-center gap-1 backdrop-blur-sm`}>
                            <Star className="w-3 h-3 fill-current" />
                            {movie.popularity}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                          {movie.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex-1 pb-3">
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{movie.overview}</p>
                      </CardContent>

                      <CardFooter className="pt-3 border-t">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{movie.release_date}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
