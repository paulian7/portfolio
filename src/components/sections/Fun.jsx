import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { RevealOnScroll } from "../RevealOnScroll";

export const Fun = () => {
  // state to hold snapshots fetched from Supabase table
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // state to hold movies and TV shows fetched from Supabase table
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  // books
  const [books, setBooks] = useState([]);

  // fetch books from Supabase
  useEffect(() => {
    const fetchBooks = async () => {
      const { data, error } = await supabase
        .from("books_read")
        .select("title, author, favorite_quote, cover_url")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching books:", error);
        return;
      }

      setBooks(data);
    };

    fetchBooks();
  }, []);

  // fetch snapshots from the snapshots table
  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("snapshots")
        .select("image_path")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching snapshots:", error);
        return;
      }

      const urls = data.map((row) => {
        const { data: publicUrlData, error } = supabase.storage
          .from("project-images")
          .getPublicUrl(row.image_path);

        if (error) {
          console.error("Error getting public URL:", error);
          return null;
        }

        return publicUrlData.publicUrl;
      });

      setImages(urls.filter((url) => url));
    };

    fetchImages();
  }, []);

  // carousel interval to rotate through images
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  // fetch movies and TV shows from supabase table
  useEffect(() => {
    const fetchMedia = async () => {
      const { data, error } = await supabase
        .from("media_rankings")
        .select("type, title, imdb_link")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching media rankings:", error);
        return;
      }

      setMovies(data.filter((item) => item.type === "movie"));
      setTvShows(data.filter((item) => item.type === "tv"));
    };

    fetchMedia();
  }, []);

  return (
    <section
      id="fun"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-50"
    >
      <RevealOnScroll>
        <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
          Fun
        </h2>

        {/* THE GRID OF CONTENT! */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto w-full px-6">
          {/* LEFT COL - favorite snapshots (big feature visual) */}
          <div
            className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out
"
          >
            <h3 className="text-lg font-bold mb-4 text-black font-baloo">
              My Favorite Snapshots 📸
            </h3>
            {images.length > 0 ? (
              <img
                src={images[currentIndex]}
                alt="Paulian's Favorite Snapshots"
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % images.length)
                }
                className="w-full h-[30rem] object-cover rounded-lg transition-all duration-700 ease-in-out cursor-pointer"
              />
            ) : (
              <p className="text-gray-700">Loading snapshots...</p>
            )}
          </div>

          {/* MIDDLE COL - books + spotify */}
          <div className="flex flex-col gap-6">
            {/* recently read books */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-[115%] lg:-ml-[7%] hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out">
              <h3 className="text-lg font-bold mb-4 text-black font-baloo">
                Recently Read 
              </h3>

              {books && books.length > 0 ? (
                (() => {
                  const book = books[0];
                  return (
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-gray-50 p-4 sm:p-5 rounded-lg">
                      {book.cover_url && (
                        <img
                          src={book.cover_url}
                          alt={book.title}
                          className="w-28 h-40 object-cover rounded-lg shadow-sm flex-shrink-0"
                        />
                      )}
                      <div className="flex flex-col flex-1">
                        <h4 className="font-bold text-black text-lg leading-tight mb-1">
                          {book.title}
                        </h4>
                        <p className="text-gray-600 italic mb-2">
                          {book.author}
                        </p>
                        {book.favorite_quote && (
                          <p className="text-gray-700 text-sm leading-snug max-w-none">
                            “{book.favorite_quote}”
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })()
              ) : (
                <p className="text-gray-700">Loading book...</p>
              )}
            </div>

            {/* spotify - soundtrack playlist */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-[115%] lg:-ml-[7%] hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out">
              <h3 className="text-lg font-bold mb-4 text-black font-baloo">
                My Soundtrack Playlist 🎥
              </h3>
              <iframe
                src="https://open.spotify.com/embed/playlist/18Mz00YH1QIJRKqbJqdyfv?utm_source=generator"
                width="100%"
                height="152"
                className="rounded-lg"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COL - movies, tv, matcha rankings */}
          <div className="flex flex-col gap-6">
            {/* top 3 - movie rankings (dynamic - populates from supabase) */}
            <div
              className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out
"
            >
              <h3 className="text-lg font-bold mb-2 text-black font-baloo">
                Movie Rankings 🎬
              </h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                {movies.length > 0
                  ? movies.map((movie) => (
                      <li key={movie.imdb_link}>
                        <a
                          href={movie.imdb_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#0A7FBF] transition-colors"
                        >
                          {movie.title}
                        </a>
                      </li>
                    ))
                  : "Loading rankings..."}
              </ol>
            </div>

            {/* top 3 - tv show rankings (dynamic - populates from supabase) */}
            <div
              className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out
"
            >
              <h3 className="text-lg font-bold mb-2 text-black font-baloo ">
                TV Show Rankings
              </h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                {tvShows.length > 0
                  ? tvShows.map((show) => (
                      <li key={show.imdb_link}>
                        <a
                          href={show.imdb_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#0A7FBF] transition-colors"
                        >
                          {show.title}
                        </a>
                      </li>
                    ))
                  : "Loading rankings..."}
              </ol>
            </div>

            {/* top 3 - matcha rankings */}
            <div
              className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out
"
            >
              <h3 className="text-lg font-bold mb-2 text-black font-baloo">
                Matcha Rankings
              </h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Airoma</li>
                <li>Stereoscope</li>
                <li>Brew Story</li>
              </ol>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
