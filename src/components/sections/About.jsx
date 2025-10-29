import { FaArrowRight } from "react-icons/fa6";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  // timeline items
  const timelineItems = [
    {
      date: "Jun 2024 – Present",
      title: "Building & Leveling Up",
      description: `In June 2024, I lost my mom to stage 4 cancer. In the months
      that followed, I focused on family and personal well-being —
      from picking up running to visiting my parents’ old stomping
      grounds in Vietnam. It was a year of healing, growth, and
      resilience, and those experiences continue to shape who I am
      today. Alongside that, I’ve been brushing up on data
      structures and algorithms and building personal projects, and
      I’m excited to carry both my personal and technical growth
      into my work.`,
      link: { href: "#projects", text: "🛠 See the projects I built!" },
    },
    {
      date: "Sept 2023 – Jun 2024",
      title: "Product-Focused Software Developer @ UC Riverside",
      description: `One of the projects closest to my heart — my first working
      directly with stakeholders! I co-led a team of four to build a
      full-stack web app for 50+ air quality researchers, learning
      the value of clear communication to meet their needs. Fun
      fact: it started as a senior capstone and later became
      part-time work with the research group. :)`,
      link: {
        href: "https://github.com/wporter/air-quality",
        text: "🔍 See how we built it!",
      },
    },
    {
      date: "Jun 2021 – Jul 2022",
      title: "Director of Operations @ Cutie & Citrus Hack",
      description: `One of the most rewarding leadership roles of my college
      career — I helped run the university’s first hybrid hackathon
      since COVID, bringing together 500+ participants, 12+
      sponsors, and $25K in prizes. Coordinating logistics across
      marketing, sponsorship, web development, and volunteer teams
      taught me to communicate effectively and thrive under
      pressure.`,
      link: {
        href: "https://citrushack2022.vercel.app/",
        text: "⚡ Relive Citrus Hack!",
      },
    },
    {
      date: "Mar 2021 – Apr 2022",
      title: "Secretary @ Association of Computing Machinery, UCR",
      description: `Where I got a taste of journalism! As secretary, I revamped
      newsletters for 300+ members, boosting engagement by 60%. I
      also wrote articles on Medium highlighting professional
      development and showcasing members, helping grow and retain
      membership by 40%. You can explore the articles `,
      link: {
        href: "https://medium.com/acm-at-ucr",
        text: "here",
      },
    },
    {
      date: "Oct 2020 - Jun 2021",
      title: "A Year of Data Structures & Algorithms",
      description: `My humble beginnings as a software developer — three quarters
      of C++ data structures and algorithms, building real
      problem-solving chops along the way.`,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-50 px-6 md:px-16 lg:px-24"
    >
      <RevealOnScroll>
        <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
          About
        </h2>

        {/* main layout */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* left col - edu && outside tech */}
          <div className="space-y-12">
            {/* education box */}
            <div
              className="p-6 bg-white rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out
"
            >
              <h3 className="text-2xl font-bold mb-4 font-baloo text-black">
                Education
              </h3>
              <ul className="space-y-2 text-gray-700 ml-2">
                <li>
                  <span className="font-semibold text-[#0A7FBF] mr-5">
                    2020 – 2024
                  </span>
                  Bachelor's of Science in Computer Science @ University of
                  California, Riverside
                </li>
              </ul>
            </div>

            {/* outside tech box */}
            <div
              className="p-6 bg-white rounded-2xl shadow-md space-y-4 hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out
"
            >
              <h3 className="text-2xl font-bold mb-2 text-black font-baloo">
                Outside of Tech
              </h3>

              {/* matcha blurb */}
              <p className="text-gray-700 leading-relaxed text-base">
                I'm a huge{" "}
                <span className="text-[#0A7FBF] font-medium">matcha</span> lover
                — but if I'm not sipping on matcha, you'll probably find me with
                a cup of{" "}
                <span className="text-[#0A7FBF] font-medium">coffee</span> in my
                hand.
              </p>

              {/* film blurb */}
              <p className="text-gray-700 leading-relaxed text-base">
                Outside of my caffeine obsession, I'm an absolute{" "}
                <span className="text-[#0A7FBF] font-medium">film fanatic</span>
                .
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
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

          {/* right col - experiences */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-black font-baloo">
              Experiences
            </h3>

            {/* timeline content - split up into items */}
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <RevealOnScroll key={index}>
                  {/* box */}
                  <div
                    className="p-6 bg-white rounded-2xl shadow-md relative hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out
"
                  >
                    {/* timeline circle */}
                    <div className="absolute -left-3 top-6 w-4 h-4 bg-[#0A7FBF] rounded-full border-2 border-white shadow-sm"></div>
                    {/* date */}
                    <time className="text-sm font-semibold text-[#0A7FBF]">
                      {item.date}
                    </time>
                    {/* box title / subject */}
                    <h4 className="mt-1 text-base font-normal text-black">
                      {item.title}
                    </h4>

                    {/* description */}
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>

                    {/* prompt to link */}
                    {item.link && (
                      <p className="mt-4 text-sm">
                        {item.link.href.startsWith("#") ? (
                          <a
                            href={item.link.href}
                            className="text-[#0A7FBF] font-medium hover:underline"
                          >
                            {item.link.text}{" "}
                            <FaArrowRight className="inline ml-1" />
                          </a>
                        ) : (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A7FBF] font-medium hover:underline"
                          >
                            {item.link.text}{" "}
                            <FaArrowRight className="inline ml-1" />
                          </a>
                        )}
                      </p>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
