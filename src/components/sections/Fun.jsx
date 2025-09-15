import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Fun = () => {
  const images = [
    "/gallery/angels.png",
    "/gallery/hamilton.png",
    "/gallery/damo.png",
    "/gallery/coffee.png",
    "/gallery/vietnam.png",
    "/gallery/capybara.png",
    "/gallery/wizard.png",
    "/gallery/grandpa.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="fun"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-50"
    >
      <RevealOnScroll>
        <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
          Fun
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full px-6">
          {/* left col - Spotify */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between row-span-2 hover:-translate-y-1 hover:shadow-lg transition-transform">
            <h3 className="text-lg font-bold mb-4 text-black font-baloo">
              My Soundtrack Playlist 🎥
            </h3>
            <iframe
              src="https://open.spotify.com/embed/playlist/18Mz00YH1QIJRKqbJqdyfv?utm_source=generator"
              width="100%"
              className="rounded-xl flex-grow min-h-[28rem]"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* mid col - snapshots */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-transform">
            <h3 className="text-lg font-bold mb-4 text-black font-baloo">
              My Favorite Snapshots 📸
            </h3>
            <img
              src={images[currentIndex]}
              alt="Paulian's Favorite Snapshots"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % images.length)
              }
              className="w-full h-[28rem] object-cover rounded-lg transition-all duration-700 ease-in-out cursor-pointer"
            />
          </div>

          {/* right col - misc */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-transform">
              <h3 className="text-lg font-bold mb-2 text-black font-baloo">
                Matcha Rankings 🌱
              </h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Airoma</li>
                <li>Stereoscope</li>
                <li>Brew Story</li>
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-transform">
              <h3 className="text-lg font-bold mb-2 text-black font-baloo">
                Currently Reading 📖
              </h3>
              <p className="text-gray-700">
                <span className="italic">Intermezzo</span> by Sally Rooney
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
