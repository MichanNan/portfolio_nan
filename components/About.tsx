"use client";
import React from "react";
import { motion } from "framer-motion";

import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About", 1);
  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[60rem] text-center leading-8 sm:mb-30 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionTitle title="about me" />
      <p className="mb-3 leading-10 text-lg">
        During my parental leave, I discovered my passion for
        <span className="font-bold">JavaScript</span>, setting the stage for my
        newfound enthusiasm. I enrolled in a{" "}
        <span className="font-bold"> web development</span>. The aspect of
        programming that I find most enjoyable is{" "}
        <span className="underline">problem-solving</span>. I relish the
        satisfaction of unraveling complex issues and arriving at solutions. My
        core stack is <span className="font-bold">React and Next.js</span>, I am
        also familiar with TypeScript. Always eager to broaden my horizons, I
        actively seek opportunities to learn new technologies. Currently, I am
        actively looking for a full-time position as a{" "}
        <span className="font-bold">frontend developer</span>.
      </p>
    </motion.section>
  );
};

export default About;
