import ListTopMovies from "@/components/common/ListTopMovies";
import SearchInput from "@/components/common/SearchInput";
import Hero from "@/components/home-page/Hero";
import { usePopularMovie, useTopRatedMovie } from "@/hooks/useFilmQuery";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="min-h-screen flex flex-col">
        <div className="w-full">
          <div className="flex justify-center mb-12">
            <SearchInput />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <ListTopMovies titlePage={"Top Rated Movies"} useGetTopMovies={useTopRatedMovie} />
          <ListTopMovies titlePage={"Most Popular Movies"} useGetTopMovies={usePopularMovie} />
        </div>
      </div>
    </>
  );
};

export default Home;
