import { motion } from 'framer-motion';
import {
  BookMarked,
  BookOpen,
  Bus,
  Cpu,
  FlaskConical,
  Home,
  Monitor,
  Salad,
  Shield,
  Trophy,
  Users,
  Wind,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { school } from '../../data/schoolData';
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal';

const icons = { BookMarked, BookOpen, Bus, Cpu, FlaskConical, Home, Monitor, Salad, Shield, Trophy, Users, Wind };

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
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {school.facilities.map((facility) => {
            const Icon = icons[facility.icon] || BookOpen;
            return (
              <motion.div
                key={facility.title}
                variants={fadeUp}
                className="group flex min-h-[170px] gap-4 border border-brand-light bg-brand-cream p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:bg-white hover:shadow-brand"
              >
                <div className="shrink-0">
                  {facility.image ? (
                    <img
                      src={`/images/${facility.image}`}
                      alt={facility.title}
                      className="h-20 w-20 rounded-xl object-cover"
                      loading="lazy"
                      width="80"
                      height="80"
                    />
                  ) : (
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-brand-navy">
                      <Icon size={25} strokeWidth={1.8} />
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl leading-tight text-brand-navy">{facility.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-brand-muted">{facility.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
