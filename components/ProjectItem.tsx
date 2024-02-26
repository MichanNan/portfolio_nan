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
    <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
      <section className="flex bg-gray-100  border border-black/5 overflow-hidden hover:bg-gray-200 transition rounded-lg">
        <div className="relative flex flex-col justify-start items-center gap-4 w-[300px] h-[620px] pb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={300}
            height={225}
            className="  rounded-t-lg shadow-sm transition"
          />

          <h3 className="text-2xl">{project.title}</h3>
          <div className="flex justify-center items-center gap-4 mt-2">
            <div className="flex items-center gap-2 bg-white border-[1px] border-gray-300  rounded-md px-4 py-2 text-gray-500 text-sm transition  focus:text-white focus:bg-gray-500  hover:text-white hover:bg-gray-500">
              <Link href={project.github} target="_blank">
                GitHub
              </Link>
            </div>
            <div className="flex items-center gap-2 bg-gray-300 border-[1px] border-gray-300 rounded-md px-4 py-2 text-black text-sm  transition  focus:text-gray-500 focus:bg-white  hover:text-gray-500 hover:bg-white ">
              <Link href={project.demo} target="_blank">
                Live Link
              </Link>
            </div>
          </div>
          <p className="text-left mt-2 px-2 text-md leading-relaxed text-gray-700 dark:text-white/70">
            {project.description}
          </p>
          <ul className="flex flex-wrap justify-center mt-2 gap-2">
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
      </section>
    </motion.div>
  );
};

export default ProjectItem;
