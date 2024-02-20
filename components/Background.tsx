import React from "react";
interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div>
      <div className="bg-[#f9d9d9] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] dark:bg-[#946263]"></div>
      <div className="bg-[#e0ebff] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.7rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      {children}
    </div>
  );
};

export default Background;
