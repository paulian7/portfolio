import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { supabase } from "../lib/supabaseClient";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  // state for timeline items
  const [timelineItems, setTimelineItems] = useState([]);

  // grab timeline items from Supabase
  useEffect(() => {
    const fetchTimeline = async () => {
      const { data, error } = await supabase
        .from("timeline_items")
        .select("*")
        .order("id", { ascending: true }); // ordered by id

      if (error) {
        console.error("Error fetching timeline items:", error);
        return;
      }

      // map Supabase rows to same structure we want in our jsx file
      const formattedItems = data.map((item) => ({
        date: item.date,
        title: item.title,
        description: item.description,
        link:
          item.link_href && item.link_text
            ? { href: item.link_href, text: item.link_text }
            : null,
      }));

      setTimelineItems(formattedItems);
    };

    fetchTimeline();
  }, []);

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
            <div className="p-6 bg-white rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out">
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
            <div className="p-6 bg-white rounded-2xl shadow-md space-y-4 hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out">
              <h3 className="text-2xl font-bold mb-2 text-black font-baloo">
                Outside of Tech
              </h3>

              <p className="text-gray-700 leading-relaxed text-base">
                I'm a huge{" "}
                <span className="text-[#0A7FBF] font-medium">matcha</span> lover
                — but if I'm not drinking on matcha, you'll probably find me drinking{" "}
                <span className="text-[#0A7FBF] font-medium">coffee</span>.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                Outside of matcha and coffee, I'm an absolute{" "}
                <span className="text-[#0A7FBF] font-medium">film fanatic</span>
                .
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                It’s almost guaranteed you’ll find me in my own world, working
                away with a movie soundtrack playing in the background. If you’d
                like to listen to a few of my favorite pieces, feel free to
                check them out{" "}
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

            {/* timeline content */}
            <div className="space-y-6">
              {timelineItems.length > 0 ? (
                timelineItems.map((item, index) => (
                  <RevealOnScroll key={index}>
                    <div className="p-6 bg-white rounded-2xl shadow-md relative hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out">
                      <div className="absolute -left-3 top-6 w-4 h-4 bg-[#0A7FBF] rounded-full border-2 border-white shadow-sm"></div>
                      <time className="text-sm font-semibold text-[#0A7FBF]">
                        {item.date}
                      </time>
                      <h4 className="mt-1 text-base font-normal text-black">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
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
                ))
              ) : (
                <p className="text-gray-700">Loading timeline...</p>
              )}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
