import { usePopularMovie } from "@/hooks/useFilmQuery";
import { motion } from "motion/react";

const Home = () => {
  const popularMovie = usePopularMovie();

  if (popularMovie.data) {
    console.log(popularMovie.data);
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-[url(/cinema.jpg)] bg-cover bg-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold text-white">Halo</h2>
      </motion.div>
    </div>
  );
};

export default Home;
