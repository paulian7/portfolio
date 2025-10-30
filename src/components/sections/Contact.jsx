import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // func to handle submitting the form
  const handleSubmit = (e) => {
    // prevents refreshing the website when user clicks submit
    e.preventDefault();

    // make call to emailjs
    // e.target -- is the data from the form
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        // helps reset the form data all back to blank
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 bg-white"
    >
      <RevealOnScroll>
        {/* title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 font-baloo text-black text-center">
          Say Hello!
        </h2>

        {/* contact form wrapper */}
        <div className="w-full sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw] 2xl:w-[35vw] mx-auto">
          {/* actual form */}
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-[#0A7FBF]/30 focus:border-[#0A7FBF]
                  transition-shadow duration-300 ease-in-out text-sm sm:text-base font-baloo shadow-sm"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-[#0A7FBF]/30 focus:border-[#0A7FBF]
                  transition-shadow duration-300 ease-in-out text-sm sm:text-base font-baloo shadow-sm"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-[#0A7FBF]/30 focus:border-[#0A7FBF]
                  transition-shadow duration-300 ease-in-out resize-none text-sm sm:text-base font-baloo shadow-sm"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0A7FBF] text-white py-3 px-6 rounded-full font-medium text-sm sm:text-base
     hover:shadow-md font-baloo"
            >
              Send
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
