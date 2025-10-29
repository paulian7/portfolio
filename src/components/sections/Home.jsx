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
            className="rounded-2xl object-cover w-64 sm:w-72 md:w-80 lg:w-[450px] max-w-full shadow-md"
          />
        </div>
      </RevealOnScroll>

      {/* text */}
      <RevealOnScroll>
        <div className="flex flex-col max-w-xl text-center md:text-left self-center mt-10 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 font-baloo break-words leading-tight">
            Hi, I'm Paulian!
          </h1>

          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            A{" "}
            <span className="text-[#0A7FBF] font-medium">
              software engineer
            </span>{" "}
            and{" "}
            <span className="text-[#0A7FBF] font-medium">
              product enthusiast
            </span>{" "}
            who loves building projects that make information more meaningful
            and accessible. Whether developing a web app for a research team or
            directing operations for large-scale hackathons, I thrive at the
            intersection of technology, storytelling, and community impact.
          </p>

          <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
            Outside of work, I’m usually running, watching films or TV shows,
            reading, or finding my next cup of matcha.{" "}
          </p>

          {/* buttons & links section */}
          <div className="flex flex-wrap items-center gap-3">
            <a
                  href="/Portfolio_Paulian_Le_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#0A7FBF] text-white text-sm font-medium shadow-sm hover:shadow-md transition"
                >
                  View Resume
                </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-gray-200 text-sm text-gray-800 bg-white hover:bg-gray-50 transition"
            >
              Learn More →
            </a>

            <div className="ml-auto flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/paulianle/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paulian's LinkedIn"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0A7FBF] hover:shadow-md transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/paulian7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paulian's GitHub"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-800 hover:shadow-md transition"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
