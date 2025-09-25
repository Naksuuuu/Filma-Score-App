import ListAllMovies from "@/components/common/ListAllMovies";
import { useAllMovies } from "@/hooks/useFilmQuery";

const Popular = () => {
  return (
    <div className="min-h-screen w-full px-8 mb-12">
      <ListAllMovies titlePage="Most Popular Movies" useGetTopMovies={useAllMovies} className="mt-[12vh]" />
    </div>
  );
};

export default Popular;
