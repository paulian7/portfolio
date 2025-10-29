import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; 
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // grabs project data from supabase
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }

      // grabs urls for pictures stored in supabase buckets
      const projectsWithUrls = data.map((project) => {
        const { data: publicUrlData } = supabase.storage
          .from("project-images") // bucket name
          .getPublicUrl(project.image_path); // grabs image path
        return {
          ...project,
          image_url: publicUrlData.publicUrl,
        };
      });

      setProjects(projectsWithUrls);
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="bg-white min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">
          {/* title */}
          <h2 className="text-4xl font-bold mb-12 font-baloo text-black text-center">
            Featured Projects
          </h2>

          {/* grid of projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-lg shadow-md bg-white hover:-translate-y-1 hover:shadow-lg transition-transform duration-400 ease-out space-y-4"
              >
                {/* project image */}
                <img
                  src={project.image_url}
                  alt={`Screenshot of ${project.title}`}
                  className="rounded-md object-cover w-full h-48"
                />

                {/* project title */}
                <h3 className="text-xl font-bold font-baloo text-black">
                  {project.title}
                </h3>

                {/* project description */}
                <p className="text-sm font-normal text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.skills?.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#0A7FBF]/10 text-[#0A7FBF] py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* project link */}
                <a
                  href={project.link_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
