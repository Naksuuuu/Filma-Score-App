import ListAllMovies from "@/components/common/ListAllMovies";
import { useAllPopularMovies } from "@/hooks/useFilmQuery";

const Popular = () => {
  return (
    <div className="min-h-screen w-full px-8 mb-12">
      <ListAllMovies titlePage="Most Popular Movies" useAllMovies={useAllPopularMovies} className="mt-[12vh]" />
    </div>
  );
};

export default Popular;
