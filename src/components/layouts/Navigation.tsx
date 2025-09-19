import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },

  {
    path: "/movies",
    label: "Movies",
    children: [
      {
        path: "/movies/popular",
        label: "Popular",
      },
      {
        path: "/movies/toprated",
        label: "Top Rated",
      },
    ],
  },
];

interface NavigationProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = ({ setIsOpen }: NavigationProps) => {
  const location = useLocation();

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex flex-col sm:flex-row">
        {links.map((link) => {
          return (
            <NavigationMenuItem key={link.path} className="relative">
              {link.children ? (
                <>
                  <NavigationMenuTrigger>
                    {location.pathname.startsWith(`${link.path}`) ? (
                      <p className="text-self-primary">{link.label}</p>
                    ) : (
                      <p>{link.label}</p>
                    )}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute z-50 !left-1/2 !-translate-x-1/2 mt-2 w-40 rounded-md bg-neutral-900 shadow-lg">
                    <ul className="flex w-full sm:w-[150px] justify-center flex-col items-center ">
                      {link.children.map((subLink) => {
                        return (
                          <li key={subLink.path}>
                            <NavigationMenuLink asChild>
                              <Link to={link.path} onClick={() => setIsOpen?.((prev) => (prev = !prev))}>
                                {subLink.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/" onClick={() => setIsOpen?.((prev) => (prev = !prev))}>
                    {location.pathname === link.path ? (
                      <p className="text-self-primary">{link.label}</p>
                    ) : (
                      <p>{link.label}</p>
                    )}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
