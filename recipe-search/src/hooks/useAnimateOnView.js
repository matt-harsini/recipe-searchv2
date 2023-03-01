import { useEffect } from "react";
import { useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useAnimateOnView = (
  visible = { opacity: 1 },
  hidden = { opacity: 0 },
  options = {
    triggerOnce: true,
    threshold: 0.9,
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
    return () => {
      controls.stop();
    };
  }, [inView]);

  return { ref, controls };
};
