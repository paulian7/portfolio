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
    <div className="flex justify-between items-center h-16">
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
        <a href="#about" className="group text-black transition duration-300">
          about
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black/85 rounded-full"></span>
        </a>

        <a href="#projects" className="group text-black transition duration-300">
          projects
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black/85 rounded-full"></span>
        </a>

        <a href="#fun" className="group text-black transition duration-300">
          fun
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black/85 rounded-full"></span>
        </a>

        <a href="#contact" className="group text-black transition duration-300">
          contact
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black/85 rounded-full"></span>
        </a>
      </div>
    </div>
  </div>
</nav>
  );
};
