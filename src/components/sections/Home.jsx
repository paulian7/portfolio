import { FaFileAlt, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 px-6 md:px-16 lg:px-24 pt-20 sm:pt-24"
    >
      {/* picture */}
      <RevealOnScroll>
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
          <img
            src="/landingPic.png"
            alt="Home page picture displaying Paulian"
            className="rounded-lg object-cover w-64 sm:w-72 md:w-80 lg:w-[450px] max-w-full shadow-md"
          />
        </div>
      </RevealOnScroll>

      {/* text */}
      <RevealOnScroll>
        <div className="flex flex-col max-w-xl text-center md:text-left self-center mt-10 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 font-baloo break-words">
            Hello hello!
          </h1>

          <p className="text-base sm:text-lg mb-4 font-normal leading-loose">
            I’m Paulian{" "}
            <span className="italic">(pronounced Paul-Lee-Anne)</span> - a{" "}
            <span className="text-[#0A7FBF] font-medium">
              software engineer
            </span>{" "}
            and{" "}
            <span className="text-[#0A7FBF] font-medium">
              product enthusiast
            </span>{" "}
            who loves building projects that spark meaningful change. From
            developing a web app for a research group to directing operations
            for a major hackathon, I thrive at the intersection of technical
            problem-solving and community impact.
          </p>

          <p className="text-base sm:text-lg mb-6 font-normal leading-loose">
            Outside of work, I’m usually exploring cozy cafes, running, watching
            movies, or reading.{" "}
            <a
              href="#about"
              className="text-[#0A7FBF] font-medium hover:underline"
            >
              Learn more about me →
            </a>
          </p>

          {/* buttons & links section */}
          <div className="flex justify-center md:justify-start space-x-6 text-2xl md:text-3xl mb-12">
            <a
              href="/Paulian_Le_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Paulian's Resume"
              className="hover:-translate-y-1 hover:shadow-lg transition-transform hover:text-gray-500"
            >
              <FaFileAlt />
            </a>
            <a
              href="https://www.linkedin.com/in/paulianle/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Paulian's LinkedIn"
              className="hover:-translate-y-1 hover:shadow-lg transition-transform hover:text-gray-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/paulian7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Paulian's GitHub"
              className="hover:-translate-y-1 hover:shadow-lg transition-transform hover:text-gray-500"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
