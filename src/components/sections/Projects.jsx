import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">
          {/* title */}
          <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
            Featured Projects
          </h2>

          {/* grid of projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* project 1 - personal portfolio */}
            <div className="p-6 rounded-lg shadow-md bg-white hover:-translate-y-1 hover:shadow-lg transition-transform space-y-4">
              <img
                src="/projects/portfolio.png"
                alt="Screenshot of Personal Portfolio project"
                className="rounded-md object-cover w-full h-48"
              />
              <h3 className="text-xl font-bold font-baloo text-black">
                Personal Portfolio
              </h3>
              <p className="text-sm font-normal text-gray-600 leading-relaxed">
                What you’re looking at right now! I built this to go back to the
                basics before jumping back into Next.js, and along the way I
                realized just how tricky (and fun) responsive design and styling
                from scratch can be.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Vercel", "Figma"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-[#0A7FBF]/10 text-[#0A7FBF] py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://github.com/paulian7/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

            {/* project 2 - omega */}
            <div className="p-6 rounded-lg shadow-md bg-white hover:-translate-y-1 hover:shadow-lg transition-transform space-y-4">
              <img
                src="/projects/omega.png"
                alt="Screenshot of OMEGA Air Quality Web App"
                className="rounded-md object-cover w-full h-48"
              />
              <h3 className="text-xl font-bold font-baloo text-black">
                OMEGA Initiative
              </h3>
              <p className="text-sm font-normal text-gray-600 leading-relaxed">
                A research web app built to bring together fragmented air
                quality data for 50+ researchers. This project taught me how
                rewarding it is to build something people actually depend on -
                and how much I enjoy turning someone’s vision into a working
                product.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "JavaScript",
                  "Tailwind CSS",
                  "ArcGIS",
                  "Figma",
                  "Cypress",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#0A7FBF]/10 text-[#0A7FBF] py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/wporter/air-quality"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>

            {/* project 3 - novo */}
            <div className="p-6 rounded-lg shadow-md bg-white hover:-translate-y-1 hover:shadow-lg transition-transform space-y-4">
              <img
                src="/projects/novo.png"
                alt="Screenshot of NOVO Site"
                className="rounded-md object-cover w-full h-48"
              />
              <h3 className="text-xl font-bold font-baloo text-black">NOVO</h3>
              <p className="text-sm font-normal text-gray-600 leading-relaxed">
                A dating app where people connect through new experiences. I
                built it as my final project for my college web dev class
                (CS110), and it’s the project that really sparked my love for
                front-end development.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "JavaScript",
                  "Tailwind CSS",
                  "Socket.IO",
                  "MongoDB",
                  "Figma",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#0A7FBF]/10 text-[#0A7FBF] py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/paulian7/project-novo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
