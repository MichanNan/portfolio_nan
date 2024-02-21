"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

interface ProjectProps {
  project: (typeof projectsData)[number];
}

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="flex  bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-full hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg">
        <div className="flex flex-col h-full py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem]">
          <h3 className="text-2xl">{project.title}</h3>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-gray-500 opacity-80 rounded-xl text-white text-sm px-2 py-1 transition focus:scale-110 hover:opacity-100 hover:scale-110">
              <Link href={project.github}>Code</Link>

              <BsArrowRight />
            </div>
            <div className="flex items-center gap-2 bg-gray-500 opacity-80 rounded-xl text-white text-sm px-2 py-1 transition focus:scale-110 hover:opacity-100 hover:scale-110">
              <Link href={project.demo}>Demo</Link>
              <BsArrowRight />
            </div>
          </div>
          <p className="text-left mt-2 text-md leading-relaxed text-gray-700 dark:text-white/70">
            {project.description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto sm:pt-5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={project.imageUrl}
          alt={project.title}
          quality={95}
          className=" absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl  group-hover:scale-[1.04] transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:-right-[initial] group-even:-left-40 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
};

export default ProjectItem;
