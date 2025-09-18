import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/movies", label: "Movies" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full flex justify-center p-4 backdrop-blur shadow-xl border-b">
      <nav className="container h-full flex items-center justify-between">
        <Link to={`/`} className="flex items-end">
          <img src="/logo-fix.svg" alt="filma-score" className="h-10 w-10 md:h-15 md:w-15" />
          <p className="font-semibold tracking-tight size-5 w-auto md:-ml-3 -ml-1">ilma Score</p>
        </Link>
        <div className="flex gap-4 font-medium tracking-tight">
          {links.map((link) => {
            return (
              <NavLink to={link.path} className="relative">
                {({ isActive }) => (
                  <div className="relative">
                    <p className="pb-1">{link.label}</p>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute left-0 bottom-0 h-[2px] w-full bg-foreground origin-left"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
