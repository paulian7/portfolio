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
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-white"
    >
      <RevealOnScroll>
        {/* title */}
        <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
          Let's Connect!
        </h2>

        {/* section's content */}
        <div className="px-4 w-150">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white border border-black rounded px-4 py-3 text-black placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300
                  transition-colors duration-300 ease-in-out font-baloo"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white border border-black rounded px-4 py-3 text-black placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300
                  transition-colors duration-300 ease-in-out font-baloo"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white border border-black rounded px-4 py-3 text-black placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300
                  transition-colors duration-300 ease-in-out resize-none font-baloo"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded font-medium transition-all duration-300 ease-in-out
                 hover:-translate-y-0.5 hover:bg-gray-500 active:bg-gray-600 font-baloo"
            >
              Send Message!
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
