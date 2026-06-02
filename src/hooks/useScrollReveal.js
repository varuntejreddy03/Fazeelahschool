import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function useScrollReveal(amount = 0.2) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  return { ref, inView };
}
