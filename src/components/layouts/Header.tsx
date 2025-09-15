import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="fixed top-5 z-50 w-full flex justify-center h-10">
      <div className=" w-[60%] flex justify-center">
        <motion.nav
          initial={{ width: "20%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="w-[60%] p-4 rounded-xl backdrop-blur bg-white/40 border border-white/30 shadow-xl flex items-center justify-between"
        >
          <div>logo</div>
          <div className="flex gap-4">
            <p>Home</p>
            <p>Film</p>
            <p>About Us</p>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
