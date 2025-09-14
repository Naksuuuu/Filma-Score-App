import { motion } from "motion/react";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-muted-foreground">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p>halo</p>
      </motion.div>
    </div>
  );
};

export default App;
