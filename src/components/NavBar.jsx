import React from "react";
import { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg drop-shadow-md">
      {/* top container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* nav bar logo && hamburger functionality */}
        <div className="flex justify-between items-center h-18">
          {/* placeholder - #home */}
          <a className="font-baloo text-2xl font-bold text-black" href="#home">
            pl
          </a>

          {/* mobile nav bar */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <RxHamburgerMenu size={"auto"} />
          </div>

          {/* desktop nav bar */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="font-baloo font-medium text-lg text-black px-4 py-2 rounded-full hover:bg-[#0A7FBF]/10 transition duration-400"
            >
              about
            </a>

            <a
              href="#projects"
              className="font-baloo font-medium text-lg text-black px-4 py-2 rounded-full hover:bg-[#0A7FBF]/10 transition duration-400"
            >
              projects
            </a>

            <a
              href="#fun"
              className="font-baloo font-medium text-lg text-black px-4 py-2 rounded-full hover:bg-[#0A7FBF]/10 transition duration-400"
            >
              fun
            </a>

            <a
              href="#contact"
              className="font-baloo font-medium text-lg text-black px-4 py-2 rounded-full hover:bg-[#0A7FBF]/10 transition duration-400"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
