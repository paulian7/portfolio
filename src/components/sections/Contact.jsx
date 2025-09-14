import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-white"
    >
      <RevealOnScroll>
        {/* title */}
        <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
          Contact Me!
        </h2>
      </RevealOnScroll>
    </section>
  );
};
