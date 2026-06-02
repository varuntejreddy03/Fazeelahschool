import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../hooks/useScrollReveal';

export default function FeatureCard({ index, title, body, cta, link, isExternal }) {
  const Wrapper = isExternal ? 'a' : Link;
  const wrapperProps = isExternal ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : { to: link };
  const label = cta.replace(' →', '').replace('→', '');

  return (
    <motion.div variants={fadeUp} className="relative bg-white rounded-2xl p-8 border-l-4 border-brand-gold shadow-brand hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <span className="absolute top-4 right-6 font-display text-5xl text-brand-gold/20 select-none">
        {String(index).padStart(2, '0')}
      </span>
      <h3 className="font-display text-xl text-brand-navy mb-3">{title}</h3>
      <p className="font-body text-brand-muted leading-relaxed mb-5">{body}</p>
      <Wrapper {...wrapperProps} className="relative font-body text-sm text-brand-sky font-medium tracking-wide uppercase after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-sky hover:after:w-full after:transition-all after:duration-300">
        {label}
      </Wrapper>
    </motion.div>
  );
}
