"use client";
import { projectsData } from "@/lib/data";
import React from "react";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <div className="flex flex-col scroll-mt-28 mb-28" id="projects">
      <SectionTitle title="Projects" />
      <div ref={ref}>
        {projectsData.map((project) => (
          <ProjectItem project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
