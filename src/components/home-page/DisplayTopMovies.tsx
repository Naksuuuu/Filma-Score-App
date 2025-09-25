import { usePopularMovie, useTopRatedMovie } from "@/hooks/useFilmQuery";
import ListTopMovies from "../common/ListTopMovies";
import SearchInput from "../common/SearchInput";

const DisplayTopMovies = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="w-full px-8 mb-12">
          <SearchInput className="mx-auto" />
        </div>

        <div className="flex flex-col gap-12">
          <ListTopMovies titlePage={"Top Rated Movies"} useGetTopMovies={useTopRatedMovie} />
          <ListTopMovies titlePage={"Most Popular Movies"} useGetTopMovies={usePopularMovie} />
        </div>
      </div>
    </>
  );
};

export default DisplayTopMovies;
