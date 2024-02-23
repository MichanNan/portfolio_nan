"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.3);
  return (
    <section ref={ref} id="contact">
      <SectionTitle title="Contact" />
    </section>
  );
};

export default Contact;
