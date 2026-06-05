import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Heart, ShieldCheck, Star } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

export default function AboutUs() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20">
        <img
          src="/images/school-angle-front-left.png"
          alt="Fazeelah English Medium School building"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/55" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-4 font-body text-sm text-white/55"><Link to="/" className="hover:text-brand-gold">Home</Link> / About Us</p>
          <h1 className="max-w-3xl font-display text-5xl text-white md:text-6xl">A Safe Place to Learn, Grow, and Succeed</h1>
          <div className="mt-5 h-1 w-16 bg-brand-gold" />
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/70">{school.about}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Story" title="Education With Values" centered={false} />
            <p className="font-body text-lg leading-relaxed text-brand-muted">{school.philosophy}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {school.whyFazeelah.map((item) => (
                <div key={item} className="flex items-start gap-3 border border-brand-light bg-brand-cream p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-gold" size={20} />
                  <p className="font-body text-sm font-semibold leading-relaxed text-brand-navy">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
            <img src="/images/school-angle-aerial.png" alt="Aerial angle of Fazeelah school" className="h-72 w-full rounded-2xl object-cover shadow-brand" loading="lazy" />
            <div className="grid gap-4 sm:grid-cols-2">
              <img src="/images/students-campus-run.jpeg" alt="Students at Fazeelah campus" className="h-44 w-full rounded-2xl object-cover" loading="lazy" />
              <img src="/images/food-healthy-tray.jpeg" alt="Nutritious food at Fazeelah" className="h-44 w-full rounded-2xl object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Our Core" title="What Guides Us" subtitle="The school combines academic structure with values, safety, and personal attention." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: 'Values & Character', desc: 'Discipline, respect, confidence, and responsibility are part of everyday learning.', Icon: Heart },
              { title: 'Secure Environment', desc: 'The campus is designed to be safe, monitored, and comfortable for children.', Icon: ShieldCheck },
              { title: 'Bright Futures', desc: 'Students build academic strength and life skills for long-term success.', Icon: Star },
            ].map(({ title, desc, Icon }) => (
              <motion.div key={title} variants={fadeUp} className="border border-brand-light bg-white p-7 shadow-brand">
                <Icon className="mb-5 text-brand-gold" size={30} strokeWidth={1.8} />
                <h3 className="font-display text-2xl text-brand-navy">{title}</h3>
                <p className="mt-3 font-body leading-relaxed text-brand-muted">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-gold py-12 text-center">
        <h2 className="font-display text-3xl text-brand-navy">Admissions Open {school.admissions.year} - {school.admissions.range}</h2>
        <div className="mt-6">
          <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Apply for Admission</Button>
          </a>
        </div>
      </section>
    </motion.main>
  );
}
