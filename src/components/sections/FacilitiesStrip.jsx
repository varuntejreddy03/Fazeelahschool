import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { school } from '../../data/schoolData';
import { staggerContainer, fadeUp } from '../../hooks/useScrollReveal';

export default function FacilitiesStrip() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="World-Class Facilities" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {school.facilities.map((f) => (
            <motion.span
              key={f.label}
              variants={fadeUp}
              className="border border-brand-gold/40 rounded-full px-5 py-2 text-sm font-body text-brand-navy cursor-default hover:bg-brand-gold hover:text-brand-navy transition-colors duration-200"
            >
              {f.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
