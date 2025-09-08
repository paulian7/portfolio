import React from "react";
import { IoClose } from "react-icons/io5";

export const MobileNav = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white/90 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* close menu button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-black text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <IoClose />
      </button>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300 hover:text-gray-500 active:text-gray-500
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        about
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300 hover:text-gray-500 active:text-gray-500
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        projects
      </a>

      <a
        href="#fun"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300 hover:text-gray-500 active:text-gray-500
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        fun
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300 hover:text-gray-500 active:text-gray-500
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        contact
      </a>
    </div>
  );
};
