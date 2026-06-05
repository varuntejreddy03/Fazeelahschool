import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../../hooks/useScrollReveal';

export default function FeatureCard({ index, title, body, cta, link, isExternal, Icon }) {
  const Wrapper = isExternal ? 'a' : Link;
  const wrapperProps = isExternal ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : { to: link };

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex min-h-[300px] flex-col overflow-hidden border border-brand-blue/10 bg-white p-7 shadow-brand transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <span className="absolute right-5 top-4 font-display text-6xl text-brand-gold/15 select-none">
        {String(index).padStart(2, '0')}
      </span>
      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-brand-gold shadow-lg shadow-brand-sky/10">
        {Icon && <Icon size={24} strokeWidth={1.8} />}
      </div>
      <h3 className="font-display text-2xl text-brand-navy">{title}</h3>
      <p className="mt-4 flex-1 font-body leading-relaxed text-brand-muted">{body}</p>
      <Wrapper
        {...wrapperProps}
        className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-[0.18em] text-brand-sky transition-colors hover:text-brand-blue"
      >
        {cta}
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </Wrapper>
    </motion.div>
  );
}
