import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";

import knittogether from "@/public/knittogether.png";
import onlineShopAdmin from "@/public/online-admin.png";
import onlineShopClient from "@/public/online-front.png";
import foodOrder from "@/public/food-order.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Orientation and Application Phase for Starting a Career.",
    location: "Hamburg Germany",
    description:
      "During this period, I have been consistently learning on Udemy, learning new tech stack such as TypeScript, Express, Tailwind, and more.",
    icon: React.createElement(IoSearch),
    date: "08.2023 - present",
  },
  {
    title: "Trainee Web Development",
    location: "neue fische - School and Pool for Digital Talent",
    description:
      "540 hours of programming practice with the independent development of a web app as a thesis",
    icon: React.createElement(LuGraduationCap),
    date: "04.2023 - 07.2023",
  },
  {
    title: "Stay at Home Mom",
    location: "Hamburg, Germany",
    description:
      "Learned JavaScript basics through online courses on Udemy and FreeCodeCamp during parental leave.",
    icon: React.createElement(IoHomeOutline),
    date: "10.2014 - 09.2019",
  },
  {
    title: "Manager Assistant",
    location: "Hamburg Germany",
    description: "Creating an online shop through Alibaba.",
    icon: React.createElement(MdOutlineShoppingCart),
    date: "10.2014 - 09.2019",
  },
] as const;

export const projectsData = [
  {
    title: "Knittogether",
    description:
      "Knittogether is an app for recording and sharing knitting projects. Knittiers can create their own accounts to record their knitting projects, yarn and needle inventory.",
    tags: ["React", "Next.js", "MongoDB", "styled Components", "Node.js"],
    imageUrl: knittogether,
    github: "https://github.com/MichanNan/Knittogether",
    demo: "https://knittogether.vercel.app/",
  },
  {
    title: "Online Shop Admin",
    description:
      "Created an online shop admin dashboard that enables the management of your online store. With this intuitive interface, users can organize and update your inventory with ease.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "prisma",
      "tailwind",
      "MongoDB",
      "Node.js",
    ],
    imageUrl: onlineShopAdmin,
    github: "https://github.com/MichanNan/shop-admin",
    demo: "https://shop-admin-phi.vercel.app/",
  },
  {
    title: "Online Shop Client",
    description:
      "This is an online shop website for knitting projects. Users can create an account to explore all the products, add to shopping cart and use stripe to place your order.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "prisma",
      "tailwind",
      "MongoDB",
      "Node.js",
    ],
    imageUrl: onlineShopClient,
    github: "https://github.com/MichanNan/shop-front",
    demo: "https://shop-front-sor7.vercel.app/",
  },
  {
    title: "Food Order System",
    description:
      "Developed and implemented an online ordering system with React and Firebase for small businesses. This is an Udemy course application.",
    tags: ["React", "Reacthooks", "firebase"],
    imageUrl: foodOrder,
    github: "https://github.com/MichanNan/food-order-app",
    demo: "https://food-order-app-michannan.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
