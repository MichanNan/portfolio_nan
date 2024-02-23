"use client";
import { links } from "@/lib/data";
import { createContext, useState } from "react";

export type SectionName = (typeof links)[number]["name"];

interface ActiveSectionContextProps {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

interface ActiveSectionProviderProps {
  children: React.ReactNode;
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextProps | null>(null);

export const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
