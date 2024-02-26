"use client";
import { projectsData } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };
  return (
    <div className="scroll-mt-28 mb-28" id="projects">
      <SectionTitle title="Projects" />
      <div ref={ref} className="flex gap-4 flex-wrap justify-center ">
        {projectsData.map((project, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            whileInView="animate"
            initial="initial"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <ProjectItem project={project} key={project.title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
