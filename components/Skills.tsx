"use client";
import { skillsData } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      className="scroll-mt-28 mb-28 max-w-[50rem] text-center"
      id="skills"
    >
      <SectionTitle title="My Skills" />
      <ul className="flex flex-wrap justify-center gap-4  text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            whileInView="animate"
            initial="initial"
            viewport={{
              once: true,
            }}
            custom={index}
            key={skill}
            className="text-xl px-4 py-2 border border-gray-200 rounded-md"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
