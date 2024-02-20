"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";

const Introduce = () => {
  return (
    <section className="max-w-[60rem] text-center mt-[8rem] " id="home">
      <div className="flex flex-col gap-10 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
          className="relative"
        >
          <Image
            src="/nan_cao_photo.jpg"
            alt="nan_cao"
            width={200}
            height={200}
            className="rounded-full border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl px-4 font-medium leading-[3rem]"
        >
          <span className="font-bold">{`Hi, I'm Nan. `}</span>
          {`I am a `}
          <span className="font-bold"> {`junior frontend developer, `}</span>
          {`living with
        my family in Hamburg Germany. I enjoy creating `}
          <span className="italic">{`websites and apps.`}</span>{" "}
          {`My focus is on `}
          <span className="underline">{`JavaScript and React.`}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row justify-center items-center px-4 text-lg font-medium"
        >
          <Link
            className="group bg-gray-800 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            href="#contact"
          >
            Contact me
            <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/lebenslauf_Nan_Cao.pdf"
          >
            Download CV
            <HiDownload className="opacity-80 group-hover:translate-y-1 transition" />
          </Link>
          <Link
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/nan-cao-09bb59272/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
          <Link
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
            href="https://github.com/MichanNan"
            target="_blank"
          >
            <FaGithubSquare />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
        >
          <SlArrowDown className="text-gray-300 text-4xl my-24  hidden sm:block dark:bg-opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Introduce;
