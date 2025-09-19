import ListTopMovies from "@/components/common/ListTopMovies";
import SearchInput from "@/components/common/SearchInput";
import Hero from "@/components/home-page/Hero";
import { usePopularMovie, useTopRatedMovie } from "@/hooks/useFilmQuery";

const Home = () => {
  return (
    <>
      <Hero />
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

export default Home;
