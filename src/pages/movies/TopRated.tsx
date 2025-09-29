import ListAllMovies from "@/components/common/ListAllMovies";
import { useAllTopRatedMovies } from "@/hooks/useFilmQuery";

const TopRated = () => {
  return (
    <div className="min-h-screen w-full px-8 mb-12">
      <ListAllMovies titlePage="Top Rated Movies" useAllMovies={useAllTopRatedMovies} className="mt-[12vh]" />
    </div>
  );
};

export default TopRated;
