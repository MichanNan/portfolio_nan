"use client";
import { projectsData } from "@/lib/data";
import React from "react";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div className="flex flex-col scroll-mt-28 mb-28" id="projects">
      <SectionTitle title="Projects" />
      <div>
        {projectsData.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
