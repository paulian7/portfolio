import { FaArrowRight } from "react-icons/fa6";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-50"
    >
      <RevealOnScroll>
        {/* title */}
        <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
          About
        </h2>

        {/* content container */}
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* left column */}
          <div className="space-y-12">
            {/* education */}
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

            {/* outside of tech */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black font-baloo">
                Outside of Tech
              </h3>

              <p className="text-black leading-relaxed ml-2 text-base">
                I'm a huge{" "}
                <span className="text-[#0A7FBF] font-medium">matcha</span> lover
                — but if I'm not sipping on matcha, you'll probably find me with
                a cup of{" "}
                <span className="text-[#0A7FBF] font-medium">coffee</span> in my
                hand.
              </p>

              <p className="text-black leading-relaxed ml-2 mt-4 text-base">
                Outside of my caffeine obsession, I'm an absolute{" "}
                <span className="text-[#0A7FBF] font-medium">film fanatic</span>
                . My top 3 films are{" "}
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
                {", and "}
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
                For television shows, my favorites include{" "}
                <a
                  href="https://www.imdb.com/title/tt5687612/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-[#0A7FBF] underline"
                >
                  Fleabag
                </a>
                {", "}
                <a
                  href="https://www.imdb.com/title/tt5421602/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-[#0A7FBF] underline"
                >
                  Anne with an E
                </a>
                {", "}
                <a
                  href="https://www.imdb.com/title/tt0892769/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-[#0A7FBF] underline"
                >
                  The Bear
                </a>
                {", and "}
                <a
                  href="https://www.imdb.com/title/tt0892769/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-[#0A7FBF] underline"
                >
                  Schitt's Creek
                </a>
                .
              </p>

              <p className="text-black leading-relaxed ml-2 mt-4 text-base">
                As a result, I almost always have a movie soundtrack playing
                while I work — and I even put together a Spotify playlist with
                my favorite pieces if you’d like to check it out{" "}
                <a
                  href="#fun"
                  className="text-[#0A7FBF] font-medium hover:underline"
                >
                  here! →
                </a>
              </p>
            </div>
          </div>

          {/* right column */}
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
                  In June 2024, I lost my mom to stage 4 cancer. In the months
                  that followed, I focused on family and personal well-being —
                  from picking up running to visiting my parents’ old stomping
                  grounds in Vietnam. It was a year of healing, growth, and
                  resilience, and those experiences continue to shape who I am
                  today. Alongside that, I’ve been brushing up on data
                  structures and algorithms and building personal projects, and
                  I’m excited to carry both my personal and technical growth
                  into my work.
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

              {/* omega initative - swe */}
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
                <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                  Sept 2023 – Jun 2024
                </time>
                <h3 className="text-base font-normal text-black dark:text-black">
                  Product-Focused Software Developer @ UC Riverside
                </h3>
                <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                  One of the projects closest to my heart — my first working
                  directly with stakeholders! I co-led a team of four to build a
                  full-stack web app for 50+ air quality researchers, learning
                  the value of clear communication to meet their needs. Fun
                  fact: it started as a senior capstone and later became
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

              {/* cutie & citrus hack - ops */}
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
                <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                  Jun 2021 – Jul 2022
                </time>
                <h3 className="text-base font-normal text-black dark:text-black">
                  Director of Operations @ Cutie & Citrus Hack
                </h3>
                <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                  One of the most rewarding leadership roles of my college
                  career — I helped run the university’s first hybrid hackathon
                  since COVID, bringing together 500+ participants, 12+
                  sponsors, and $25K in prizes. Coordinating logistics across
                  marketing, sponsorship, web development, and volunteer teams
                  taught me to communicate effectively and thrive under
                  pressure.
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

              {/* acm secretary */}
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
                <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                  Mar 2021 – Apr 2022
                </time>
                <h3 className="text-base font-normal text-black dark:text-black">
                  Secretary @ Association of Computing Machinery, UCR
                </h3>
                <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                  Where I got a taste of journalism! As secretary, I revamped
                  newsletters for 300+ members, boosting engagement by 60%. I
                  also wrote articles on Medium highlighting professional
                  development and showcasing members, helping grow and retain
                  membership by 40%. You can explore the articles{" "}
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
                  href="https://acm.cs.ucr.edu/"
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

              {/* cs10a-cs10c */}
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
                <time className="mb-1 text-sm font-semibold leading-none text-[#0A7FBF]">
                  Oct 2020 - Jun 2021
                </time>
                <h3 className="text-base font-normal text-black dark:text-black">
                  A Year of Data Structures & Algorithms
                </h3>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  My humble beginnings as a software developer — three quarters
                  of C++ data structures and algorithms, building real
                  problem-solving chops along the way.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
