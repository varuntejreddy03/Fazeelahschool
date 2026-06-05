import { motion } from 'framer-motion';
import { BookOpen, Bus, Cpu, Home, Monitor, Shield, Trophy, Wind } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { school } from '../../data/schoolData';
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal';

const icons = { Monitor, BookOpen, Wind, Shield, Trophy, Bus, Home, Cpu };

export default function FacilitiesStrip() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="World-Class Facilities"
          subtitle="A secure, well-equipped campus designed for focused learning and confident growth."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {school.facilities.map((facility) => {
            const Icon = icons[facility.icon] || BookOpen;
            return (
              <motion.div
                key={facility.label}
                variants={fadeUp}
                className="group flex min-h-[150px] flex-col items-center justify-center border border-brand-light bg-brand-cream px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:bg-white hover:shadow-brand"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-brand-navy">
                  <Icon size={25} strokeWidth={1.8} />
                </span>
                <p className="font-body text-sm font-semibold leading-snug text-brand-navy">{facility.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
