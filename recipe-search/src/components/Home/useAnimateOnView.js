import React, { useEffect } from "react";
import { useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useAnimateOnView = (start = "visible", end = "hidden", options = {}) => {
  const controls = useAnimationControls();
  const { ref, inView } = useInView(options);
  useEffect(() => {
    if (inView) {
      controls.start(start);
    }
    if (!inView) {
      controls.start(end);
    }
  }, [inView]);

  return { ref, controls };
};
