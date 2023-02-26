import React, { useEffect } from "react";
import { useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useAnimateOnView = (
  visible = { opacity: 1 },
  hidden = { opacity: 0 },
  options = {
    triggerOnce: true,
    threshold: 0.1,
  }
) => {
  const controls = useAnimationControls();
  const { ref, inView } = useInView(options);
  useEffect(() => {
    if (inView) {
      controls.start(visible);
    }
    if (!inView) {
      controls.start(hidden);
    }
  }, [inView]);

  console.log(inView);
  return { ref, controls };
};
