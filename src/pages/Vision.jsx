import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Bus,
  Cpu,
  Home as HomeIcon,
  Landmark,
  Monitor,
  Salad,
  Shield,
  Trophy,
  Wind,
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

const icons = { BookOpen, Bus, Cpu, Home: HomeIcon, Landmark, Monitor, Salad, Shield, Trophy, Wind };

export default function Vision() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20">
        <img src="/images/school-angle-aerial.png" alt="Aerial view of Fazeelah school" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-4 font-body text-sm text-white/55"><Link to="/" className="hover:text-brand-gold">Home</Link> / Vision</p>
          <h1 className="max-w-3xl font-display text-5xl text-white md:text-6xl">Nurturing Confident and Responsible Learners</h1>
          <div className="mt-5 h-1 w-16 bg-brand-gold" />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-hidden rounded-2xl shadow-brand">
            <img src="/images/school-angle-front-wide.png" alt="Fazeelah school front view" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Vision" title="A Foundation for Life-Long Success" centered={false} />
            <p className="mb-6 font-body text-lg leading-relaxed text-brand-muted">{school.vision}</p>
            <blockquote className="border-l-4 border-brand-gold pl-5 font-serif text-2xl italic leading-relaxed text-brand-navy">
              We prepare children with knowledge, confidence, values, and the ability to contribute positively to society.
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section id="campus-life" className="bg-brand-navy py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="What Sets Us Apart" title="Why Choose Fazeelah" subtitle="Modern facilities, strong academics, and a secure campus support every child's growth." dark />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {school.whyChooseUs.map((item) => {
              const Icon = icons[item.icon] || BookOpen;
              return (
                <motion.div key={item.title} variants={fadeUp} className="border border-white/10 bg-white/[0.07] p-6">
                  <Icon className="mb-4 text-brand-gold" size={28} strokeWidth={1.8} />
                  <h3 className="font-display text-xl leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-white/65">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Community" title="Safe, Inclusive, and Collaborative" centered={false} />
            <p className="font-body text-lg leading-relaxed text-brand-muted">{school.community}</p>
            <p className="mt-5 font-body text-lg leading-relaxed text-brand-muted">
              Students learn in an environment that values empathy, respect, discipline, and teamwork.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2">
            <img src="/images/hostel-bunk-beds.jpeg" alt="Fazeelah hostel rooms" className="h-64 w-full rounded-2xl object-cover" loading="lazy" />
            <img src="/images/hostel-dining-hall.jpeg" alt="Fazeelah dining hall" className="h-64 w-full rounded-2xl object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
