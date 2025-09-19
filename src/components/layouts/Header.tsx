import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const Header = () => {
  const width = useWindowWidth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/movies", label: "Movies" },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full flex justify-center p-4 backdrop-blur shadow-xl border-b">
        <nav className="container h-full flex items-center justify-end sm:justify-between">
          {width >= 640 && (
            <Link to={`/`} className="flex items-end">
              <img src="/logo-fix.svg" alt="filma-score" className="h-10 w-10 md:h-15 md:w-15" />
              <p className="font-semibold tracking-tight size-5 w-auto md:-ml-3 -ml-1">ilma Score</p>
            </Link>
          )}

          {width < 640 ? (
            <div>
              <Button
                onClick={() => setIsOpen((prev) => (prev = !prev))}
                className={`${isOpen ? "fixed z-50 top-4 right-4" : ""}`}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
              <AnimatePresence>
                {!!isOpen && (
                  <motion.div
                    key={"small-nav"}
                    initial={{ clipPath: "circle(0% at 95% 5%)" }} // posisi dekat button
                    animate={{ clipPath: "circle(150% at 95% 5%)" }}
                    exit={{ clipPath: "circle(0% at 95% 5%)" }}
                    // exit={{ opacity: 0 }}
                    className="fixed inset-0 z-20 w-full h-screen flex flex-col gap-6 justify-center items-center p-4 backdrop:backdrop-blur-sm bg-background"
                  >
                    {links.map((link) => {
                      return (
                        <NavLink to={link.path} key={link.path} className="relative" onClick={() => setIsOpen(false)}>
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex gap-4 font-medium tracking-tight">
              {links.map((link) => {
                return (
                  <NavLink to={link.path} key={link.path} className="relative">
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
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
