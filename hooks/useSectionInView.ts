import {
  ActiveSectionContext,
  SectionName,
} from "@/context/active-nav-link-context";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useSectionInView = (
  sectionName: SectionName,
  threshold: number
) => {
  const { ref, inView } = useInView({ threshold });
  const activeSectionCtx = useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView) {
      activeSectionCtx?.setActiveSection(sectionName);
    }
  }, [inView]);

  return { ref, inView };
};
