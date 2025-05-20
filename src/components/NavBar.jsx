import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-5 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <a className="text-xl font-bold flex items-center px-6" href="#hero">
            <span className="relative mx-auto z-10">
              <img src="/images/logo.svg" alt="" className="text-white" />
            </span>
          </a>
          {/* nav desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((items, key) => (
              <a
                href={items.href}
                key={key}
                className={cn(
                  " text-white capitalize text-lg font-barlow  active:bg-white hover:rounded-full ",
                  "  active:text-gray-700 hover:cursor-pointer hover:px-4 ",
                  " hover:bg-white/20 transition-all duration-300"
                )}
              >
                {items.name}
              </a>
            ))}
          </div>

          {/* mobile nav */}
          <button
            className="z-50 p-2 text-white md:hidden"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X
                size={24}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="text-gray-900"
              />
            ) : (
              <Menu
                size={24}
                className="text-white"
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              />
            )}
          </button>
          <div
            className={cn(
              "fixed bg-white/80 inset-0 backdrop-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl ">
              {navItems.map((items, key) => (
                <a
                  href={items.href}
                  key={key}
                  className=" transition-colors duration-300 font-barlow py-2 px-3 active:bg-yellow-500 rounded-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {items.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
