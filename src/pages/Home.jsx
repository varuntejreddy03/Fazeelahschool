import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import AnnouncementBanner from '../components/sections/AnnouncementBanner';
import OverviewGrid from '../components/sections/OverviewGrid';
import FacilitiesStrip from '../components/sections/FacilitiesStrip';
import StatBadge from '../components/ui/StatBadge';
import Button from '../components/ui/Button';
import { school } from '../data/schoolData';

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      <HeroSection />
      <AnnouncementBanner />

      {/* Stats Strip */}
      <section className="bg-brand-navy py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4">
          {school.stats.map((s, i) => (
            <StatBadge key={s.label} value={s.value} label={s.label} isLast={i === school.stats.length - 1} />
          ))}
        </div>
      </section>

      <OverviewGrid />
      <FacilitiesStrip />

      {/* Admissions CTA Block */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-brand-navy p-12 md:p-16 flex flex-col justify-center">
          <p className="text-brand-gold font-body text-xs uppercase tracking-[0.25em] mb-3">Admissions</p>
          <h2 className="font-display text-3xl md:text-4xl text-white">Admissions Open {school.admissions.year}</h2>
          <div className="w-16 h-1 bg-brand-gold my-4" />
          <p className="font-body text-white/70 leading-relaxed">{school.subTagline}</p>
          <div className="mt-6">
            <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp">Message Us on WhatsApp</Button>
            </a>
          </div>
        </div>
        <div className="relative min-h-[300px]">
          <img src="/images/promo-admissions-dharmavaram.jpeg" alt="Admissions Open 2026-2027" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
      </section>

    </motion.main>
  );
}
