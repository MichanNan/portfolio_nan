import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-[70%] mx-auto text-center">{children}</div>;
};

export default Container;
