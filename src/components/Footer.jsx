export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 mt-12 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center text-sm font-baloo space-y-4 sm:space-y-0 sm:space-x-24 md:space-x-56 px-4">
        {/* text side*/}
        <p className="font-semibold text-center sm:text-left">
          developed by paulian - sept ‘25
        </p>

        {/* links side */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6 md:gap-8">
          <a
            href="/Paulian_Le_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A7FBF] underline"
          >
            my resume
          </a>
          <a
            href="https://www.linkedin.com/in/paulianle/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A7FBF] underline"
          >
            my linkedin
          </a>
          <a
            href="https://github.com/paulian7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A7FBF] underline"
          >
            my github
          </a>
        </div>
      </div>
    </footer>
  );
};
