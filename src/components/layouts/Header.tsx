import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full flex justify-center p-4 backdrop-blur shadow-xl border-b">
      <nav className="container h-full flex items-center justify-between">
        <Link to={`/`} className="flex items-end">
          <img src="/logo-fix.svg" alt="filma-score" className="h-10 w-10 md:h-15 md:w-15" />
          <p className="font-semibold tracking-tight size-5 w-auto md:-ml-3 -ml-1">ilma Score</p>
        </Link>
        <div className="flex gap-4 font-medium tracking-tight">
          <NavLink to="/" className="relative">
            {({ isActive }) => (
              <div className="relative">
                <p className="pb-1">Home</p>
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-foreground origin-left"
                  />
                )}
              </div>
            )}
          </NavLink>
          <NavLink to="/" className="relative">
            {({ isActive }) => (
              <div className="relative">
                <p className="pb-1">Movies</p>
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-foreground origin-left"
                  />
                )}
              </div>
            )}
          </NavLink>
          <NavLink to="/" className="relative">
            {({ isActive }) => (
              <div className="relative">
                <p className="pb-1">About Us</p>
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-foreground origin-left"
                  />
                )}
              </div>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
