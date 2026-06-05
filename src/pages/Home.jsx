import { motion } from 'framer-motion';
import {
  BookOpen,
  Bus,
  Cpu,
  GraduationCap,
  Heart,
  Landmark,
  Monitor,
  Shield,
  Sprout,
  Star,
  Trophy,
  Wind,
} from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import OverviewGrid from '../components/sections/OverviewGrid';
import FacilitiesStrip from '../components/sections/FacilitiesStrip';
import StatBadge from '../components/ui/StatBadge';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

const iconMap = {
  BookOpen,
  Bus,
  Cpu,
  GraduationCap,
  Heart,
  Landmark,
  Monitor,
  Shield,
  Sprout,
  Star,
  Trophy,
  Wind,
};

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />

      <section className="bg-brand-navy py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 lg:grid-cols-4">
          {school.stats.map((stat, index) => (
            <StatBadge key={stat.label} value={stat.value} label={stat.label} isLast={index === school.stats.length - 1} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-navy py-7">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-7xl grid-cols-2 px-4 md:grid-cols-4"
        >
          {school.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Star;
            return (
              <motion.div
                key={pillar.label}
                variants={fadeUp}
                className={`flex flex-col items-center gap-2 px-4 text-center ${index < school.pillars.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
              >
                <Icon className="h-7 w-7 text-brand-gold" strokeWidth={1.8} />
                <p className="font-body text-xs uppercase tracking-wider text-white/80">{pillar.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <OverviewGrid />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Why Choose Fazeelah"
            title="Designed for Complete Growth"
            subtitle="From academics to safety, every part of the campus is planned around confident learning."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {school.whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || BookOpen;
              return (
                <motion.div key={item.title} variants={fadeUp} className="border border-brand-light bg-brand-cream p-6 shadow-brand">
                  <Icon className="mb-4 text-brand-gold" size={28} strokeWidth={1.8} />
                  <h3 className="font-display text-2xl leading-tight text-brand-navy">{item.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-brand-muted">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
          <div>
            <p className="font-display text-[120px] leading-none text-brand-gold/20">"</p>
            <p className="font-body text-sm uppercase tracking-widest text-brand-gold">Principal's Message</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <p className="font-serif text-2xl italic leading-relaxed text-brand-navy">{school.principal.message}</p>
            <div className="mb-4 mt-6 h-px w-12 bg-brand-gold" />
            <p className="font-body font-semibold text-brand-navy">- Principal, Fazeelah School</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Classes We Offer"
            title={school.admissionsRange}
            subtitle={`Admissions Open ${school.admissions.year} for ${school.admissionsRange}.`}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {school.classes.map((classItem) => (
              <div key={classItem.label} className={`border px-4 py-5 text-center font-body text-sm font-semibold ${classItem.color}`}>
                {classItem.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-brand-gold">Boarding & Hostel</p>
            <h2 className="font-display text-4xl text-white md:text-5xl">{school.hostel.headline}</h2>
            <div className="mx-auto my-5 h-1 w-16 bg-brand-gold" />
            <p className="font-body text-lg leading-relaxed text-white/60">{school.hostel.desc}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <img
              src={`/images/${school.hostel.images.main}`}
              alt="Fazeelah hostel bunk beds"
              className="h-72 w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div className="border border-white/10 bg-white/[0.06] p-6">
              {school.hostel.features.map((feature) => (
                <p key={feature} className="py-1 font-body text-sm text-white/80">
                  <span className="mr-2 text-brand-gold">✓</span>
                  {feature}
                </p>
              ))}
            </div>
            <img
              src={`/images/${school.hostel.images.dining}`}
              alt="Fazeelah hostel dining hall"
              className="h-72 w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-10 text-center">
            <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Enquire About Hostel</Button>
            </a>
          </div>
        </div>
      </section>

      <FacilitiesStrip />

      <section className="bg-brand-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Testimonials" title="Parents Trust Fazeelah" subtitle="Families value the balance of care, academics, and discipline." />
          <div className="grid gap-6 md:grid-cols-3">
            {school.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="border border-brand-light bg-white p-6 shadow-brand">
                <p className="mb-4 font-body text-brand-gold">{'★'.repeat(testimonial.stars)}</p>
                <p className="font-serif text-xl italic leading-relaxed text-brand-navy">"{testimonial.text}"</p>
                <p className="mt-5 font-body font-semibold text-brand-navy">{testimonial.name}</p>
                <p className="font-body text-sm text-brand-muted">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Gallery" title="Campus Moments" subtitle="Real views from Fazeelah School facilities and campus life." />
          <div className="grid auto-rows-[240px] gap-4 md:grid-cols-3">
            {school.gallery.map((image, index) => (
              <img
                key={image}
                src={`/images/${image}`}
                alt={`Fazeelah School gallery ${index + 1}`}
                className={`h-full w-full object-cover ${index === 0 ? 'md:col-span-2' : ''}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex min-h-[440px] flex-col justify-center bg-brand-navy p-8 md:p-16">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-brand-gold">Admissions</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">
            Admissions Open {school.admissions.year} - {school.admissionsRange}
          </h2>
          <div className="my-5 h-1 w-16 bg-brand-gold" />
          <p className="max-w-xl font-body leading-relaxed text-white/70">
            Speak with our admissions team for seat availability, hostel details, transportation, and the application process.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Apply on WhatsApp</Button>
            </a>
            <a href="/#/contact">
              <Button variant="outline">View Contact Details</Button>
            </a>
          </div>
        </div>
        <div className="relative min-h-[440px] overflow-hidden bg-brand-gold">
          <img
            src="/images/students-campus-run.jpeg"
            alt="Students on Fazeelah campus"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent" />
        </div>
      </section>
    </motion.main>
  );
}
