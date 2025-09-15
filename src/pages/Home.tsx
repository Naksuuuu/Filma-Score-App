// import { usePopularMovie } from "@/hooks/useFilmQuery";
import { motion } from "motion/react";

const Home = () => {
  // const popularMovie = usePopularMovie();

  // if (popularMovie.data) {
  //   console.log(popularMovie.data);
  // }
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10 bg-[url(/cinema.jpg)] bg-cover bg-center"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background to-black/20 bg-cover bg-center"></div>

      <div className="flex justify-center items-center min-h-screen">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <h2 className="text-4xl font-bold tracking-tight text-white text-center leading-relaxed">
            Know Before You Watch, <br /> Don't Waste Your Time on Bad Movies.
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
