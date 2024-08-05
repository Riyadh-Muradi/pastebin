/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

const useScrollSync = (
  ref1: React.RefObject<HTMLElement>,
  ref2: React.RefObject<HTMLElement>,
) => {
  useEffect(() => {
    const syncScroll = () => {
      if (ref1.current && ref2.current) {
        ref2.current.scrollTop = ref1.current.scrollTop;
      }
    };

    const handleScroll = () => {
      syncScroll();
    };

    if (ref1.current) {
      ref1.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref1.current) {
        ref1.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref1, ref2]);
};

export default useScrollSync;
