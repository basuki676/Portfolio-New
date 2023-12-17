import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/1-.png"
          title="3D Game Project"
          description="3D game, which I made using unity and C#"
        />
        <ProjectCard
          src="/2.png"
          title="Project Masjid"
          description="The project I created with HTML, CSS and using oop techniques, and using a data base"
        />
        <ProjectCard
          src="/3.png"
          title="Apotek App"
          description="Project that I made with Laravel and data base"
        />
      </div>
    </div>
  );
};

export default Projects;