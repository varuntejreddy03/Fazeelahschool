import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, GraduationCap, Heart, Sprout, Star } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

const pillarIcons = { GraduationCap, Heart, Sprout, Star };

export default function Mission() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20">
        <img src="/images/food-healthy-tray.jpeg" alt="Healthy meals at Fazeelah" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/65" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-4 font-body text-sm text-white/55"><Link to="/" className="hover:text-brand-gold">Home</Link> / Mission</p>
          <h1 className="max-w-3xl font-display text-5xl text-white md:text-6xl">Empowering Every Student for Lifelong Learning</h1>
          <div className="mt-5 h-1 w-16 bg-brand-gold" />
        </div>
      </section>

      <section id="programs" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-hidden rounded-2xl shadow-brand">
            <img src="/images/school-angle-front-left.png" alt="Side angle of Fazeelah school" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Mission" title="High-Quality Education With Values" centered={false} />
            <div className="space-y-4">
              {school.mission.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-gold" size={22} />
                  <p className="font-body text-lg leading-relaxed text-brand-muted">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Brand Pillars" title="How We Shape Growth" subtitle="The brochure highlights four pillars that guide the school experience." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {school.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon] || Star;
              return (
                <motion.div key={pillar.label} variants={fadeUp} className="border border-brand-light bg-white p-7 text-center shadow-brand">
                  <Icon className="mx-auto mb-4 text-brand-gold" size={34} strokeWidth={1.8} />
                  <h3 className="font-display text-2xl text-brand-navy">{pillar.label}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Principal's Message" title="Building a Better Tomorrow" centered={false} dark />
            <p className="font-serif text-2xl italic leading-relaxed text-white/80">{school.principal.message}</p>
            <div className="mb-4 mt-6 h-px w-12 bg-brand-gold" />
            <p className="font-body font-semibold text-white">Principal, Fazeelah School</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="/images/hostel-dining-hall.jpeg" alt="Fazeelah dining and care facility" className="h-80 w-full rounded-2xl object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-gold py-12 text-center">
        <h2 className="font-display text-3xl text-brand-navy">Admissions Open {school.admissions.year} - {school.admissions.range}</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Apply for Admissions</Button>
          </a>
          <Link to="/contact"><Button variant="outline" className="border-brand-navy text-brand-navy hover:border-brand-navy">Contact Us</Button></Link>
        </div>
      </section>
    </motion.main>
  );
}
