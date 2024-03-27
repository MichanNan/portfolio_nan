"use client";

import React, { Fragment } from "react";

import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experience = () => {
  const { ref, inView } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} className="scroll-mt-28" id="experience">
      <SectionTitle title="Experience" />
      <VerticalTimeline>
        {experiencesData.map((experience, index) => {
          return (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={experience.date}
                icon={experience.icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capotalize">{experience.title}</h3>
                <p className="font-normal !mt-0">{experience.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
