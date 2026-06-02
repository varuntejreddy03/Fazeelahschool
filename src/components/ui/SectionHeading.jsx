import { motion } from 'framer-motion';
import { fadeUp } from '../../hooks/useScrollReveal';

export default function SectionHeading({ eyebrow, title, subtitle, centered = true, dark = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <p className="text-brand-gold font-body text-xs uppercase tracking-[0.25em] mb-3">{eyebrow}</p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl ${dark ? 'text-white' : 'text-brand-navy'}`}>
        {title}
      </h2>
      <div className={`w-16 h-1 bg-brand-gold my-4 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`font-body text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-brand-muted'} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
