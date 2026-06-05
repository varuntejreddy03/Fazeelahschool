import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function StatBadge({ value, label, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const hasNumber = !Number.isNaN(numericPart);
  const [display, setDisplay] = useState(hasNumber ? '0' : value);

  useEffect(() => {
    if (!inView || !hasNumber) return;
    let current = 0;
    const step = Math.ceil(numericPart / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= numericPart) { current = numericPart; clearInterval(interval); }
      setDisplay(current + suffix);
    }, 30);
    return () => clearInterval(interval);
  }, [hasNumber, inView, numericPart, suffix]);

  return (
    <motion.div ref={ref} className={`text-center p-6 ${!isLast ? 'lg:border-r lg:border-white/10' : ''}`}>
      <p className="font-display text-4xl sm:text-6xl text-brand-gold font-bold">{display}</p>
      <div className="w-8 h-px bg-brand-gold/40 mx-auto my-2 sm:my-3" />
      <p className="font-body text-white/70 text-xs sm:text-sm uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}
