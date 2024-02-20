import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h1 className="font-medium text-3xl capitalize my-8 text-center ">
      {title}
    </h1>
  );
};

export default SectionTitle;
