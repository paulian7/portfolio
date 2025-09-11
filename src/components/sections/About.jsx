import { FaArrowRight } from "react-icons/fa6";

export const About = () => {
  // const hobbies = [
  //   "cafe hopping",
  //   "reading",
  //   "journaling",
  //   "listening to movie soundtracks",
  //   "running",
  // ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-50"
    >
      {/* title */}
      <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
        About
      </h2>

      {/* content container */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left column */}
        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold font-baloo mb-4 text-black">
              Education
            </h3>
            <ul className="space-y-2 text-black ml-2">
              <li className="font-normal">
                <span className="font-semibold text-[#0A7FBF] mr-5">
                  2020 – 2024
                </span>
                Bachelor's of Science in Computer Science @ University of
                California, Riverside
              </li>
            </ul>
          </div>

          {/* Outside of Tech */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black font-baloo">
              Outside of Tech
            </h3>

            <p className="text-black leading-relaxed ml-2 text-base">
              I'm a big fan of{" "}
              <span className="text-[#0A7FBF] font-medium">matcha</span> (and
              the occasional{" "}
              <span className="text-[#0A7FBF] font-medium">coffee</span>).
              Lately, I've been on the hunt for my next go-to cafe - right now,{" "}
              <a
                href="https://www.yelp.com/biz/airoma-cafe-garden-grove-3?uid=Df4szU4kB9x0TZaxDL1lXQ&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-[#0A7FBF] underline"
              >
                Airoma Cafe
              </a>{" "}
              is on top for their pandan drinks.
            </p>

            <p className="text-black leading-relaxed ml-2 mt-4 text-base">
              I'm also a huge{" "}
              <span className="text-[#0A7FBF] font-medium">movie fanatic</span>!
              My top 3 films have to be{" "}
              <a
                href="https://www.imdb.com/title/tt3783958/"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-[#0A7FBF] underline"
              >
                La La Land
              </a>
              {", "}
              <a
                href="https://www.imdb.com/title/tt0088763/"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-[#0A7FBF] underline"
              >
                Back to the Future
              </a>
              {", "}
              <a
                href="https://www.imdb.com/title/tt0892769/"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-[#0A7FBF] underline"
              >
                How to Train Your Dragon
              </a>
              .
            </p>

            <p className="text-black leading-relaxed ml-2 mt-4 text-base">
              Chances are, if I'm working, you'll probably catch me with a{" "}
              <span className="text-[#0A7FBF] font-medium">
                movie soundtrack
              </span>{" "}
              playing in the background.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black font-baloo">
            Experiences
          </h3>
          <ol className="relative border-s border-black dark:border-black">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                Jun 2024 – Present
              </time>
              <h3 className="text-base font-normal text-black dark:text-black">
                Building & Leveling Up
              </h3>
              <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                After my mom’s passing from stage 4 cancer in June 2024, I took
                time to focus on my family and personal well-being while
                revisiting computer science fundamentals through LeetCode and
                creating new projects. This past year has been one of healing,
                growth, and resilience — experiences I’m carrying into what’s
                next.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center px-4 py-2 text-sm font-medium 
      text-white bg-black rounded-lg 
      hover:bg-gray-500 hover:text-white 
      focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
              >
                🛠 See the projects I built!
                <FaArrowRight className="ml-4" />
              </a>
            </li>

            {/* UCR Software Developer */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                Sept 2023 – Jun 2024
              </time>
              <h3 className="text-base font-normal text-black dark:text-black">
                Product-Focused Software Developer @ UC Riverside
              </h3>
              <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                Co-led a team of four to build a full-stack air quality web app
                adopted by 50+ researchers. Learned the value of consistent
                stakeholder communication to ensure the product met real user
                needs. Originally a senior capstone project, later extended into
                part-time work with the research group.
              </p>
              <a
                href="https://github.com/wporter/air-quality"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium 
             text-white bg-black rounded-lg 
             hover:bg-gray-500 hover:text-white 
             focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
              >
                🔍 See how we built it!
                <FaArrowRight className="ml-4" />
              </a>
            </li>

            {/* Cutie & Citrus Hack */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                Jun 2021 – Jul 2022
              </time>
              <h3 className="text-base font-normal text-black dark:text-black">
                Director of Operations @ Cutie & Citrus Hack
              </h3>
              <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                Helped run the first hybrid hackathon since the
                pandemic—bringing together 500+ participants, 12+ sponsors, and
                $25K+ in prizes. Coordinated logistics across sponsorship,
                marketing, and web dev teams, learning how to thrive under
                pressure and keep communication sharp.
              </p>
              <a
                href="https://citrushack2022.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium 
             text-white bg-black rounded-lg 
             hover:bg-gray-500 hover:text-white 
             focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
              >
                ⚡ Relive Citrus Hack! <FaArrowRight className="ml-4" />
              </a>
            </li>

            {/* ACM Leadership */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                Mar 2021 – Apr 2022
              </time>
              <h3 className="text-base font-normal text-black dark:text-black">
                Secretary @ Association of Computing Machinery, UCR
              </h3>
              <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                Boosted engagement 60% by revamping newsletters for 300+ members
                and grew membership 40% with career-focused content and
                mentoring on Medium. My favorite part was seeing how every
                member brought their own unique story to the club. Check out the
                articles from my term as secretary{" "}
                <a
                  href="https://medium.com/acm-at-ucr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A7FBF] underline italic font-medium"
                >
                  here
                </a>
                !
              </p>
              <a
                href="https://acm-dev.cs.ucr.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium 
             text-white bg-black rounded-lg 
             hover:bg-gray-500 hover:text-white 
             focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
              >
                💡 Explore ACM! <FaArrowRight className="ml-4" />
              </a>
            </li>

            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                Oct 2020 - Jun 2021
              </time>
              <h3 className="text-base font-normal text-black dark:text-black">
                A Year of Data Structures & Algorithms
              </h3>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Completed 3 quarters of intensive coursework at University of
                California, Riverside, gaining hands-on experience in C++ and
                mastering core concepts in data structures, algorithms, and
                problem-solving.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
