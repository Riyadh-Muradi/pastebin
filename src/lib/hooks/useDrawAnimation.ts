import { useMemo } from "react";
import { motion } from "framer-motion";

export const useDrawAnimation = () => {
  return useMemo(() => {
    return {
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay: 0.5, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay: 0.5, duration: 1 },
        },
      },
    };
  }, []);
};
