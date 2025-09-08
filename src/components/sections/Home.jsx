import { FaFileAlt, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 px-6 md:px-16 lg:px-24 pt-20 sm:pt-24"
    >
      {/* picture */}
      <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
        <img
          src="/landingPic.png"
          alt="Home page picture displaying Paulian"
          className="rounded-lg object-cover w-64 sm:w-72 md:w-80 lg:w-[450px] max-w-full"
        />
      </div>

      {/* text */}
      <div className="flex flex-col max-w-xl text-center md:text-left self-center mt-10 md:mt-0">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 font-baloo break-words">
          Hello hello! I'm Paulian :)
        </h1>

        <p className="text-base sm:text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p className="text-base sm:text-lg mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        {/* buttons & links section */}
        <div className="flex justify-center md:justify-start space-x-6 text-2xl md:text-3xl">
          <a
            href="/Paulian_Le_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Paulian's Resume"
            className="transition-colors duration-300 hover:text-gray-500"
          >
            <FaFileAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/paulianle/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Paulian's LinkedIn"
            className="transition-colors duration-300 hover:text-gray-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/paulian7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Paulian's GitHub"
            className="transition-colors duration-300 hover:text-gray-500"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </section>
  );
};
