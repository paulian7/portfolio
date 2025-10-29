import { RevealOnScroll } from "./RevealOnScroll";

export const Footer = () => {
  return (
    <RevealOnScroll>
      <footer className="bg-gray-50 backdrop-blur-lg drop-shadow-md border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-6 flex flex-col sm:flex-row justify-between items-center">
          {/* left text */}
          <div className="flex-1 flex justify-start">
            <p className="text-sm text-gray-500 font-baloo">
              Developed with ♥ – Sept ‘25
            </p>
          </div>

          {/* right text */}
          <div className="flex-1 flex justify-end">
            <p className="text-sm text-gray-500 font-baloo">
              © 2025 Paulian Le
            </p>
          </div>
        </div>
      </footer>
    </RevealOnScroll>
  );
};
