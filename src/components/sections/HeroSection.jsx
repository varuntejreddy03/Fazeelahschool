import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { school } from '../../data/schoolData';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-center bg-cover" style={{
        backgroundImage: 'url(/images/hero-building.jpeg)'
      }} />
      <div className="absolute inset-0 bg-brand-navy/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-xl text-brand-gold italic mb-4"
        >
          {school.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl md:text-9xl text-brand-gold"
        >
          FAZEELAH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-display text-lg sm:text-2xl text-white/70 tracking-[0.15em] sm:tracking-[0.3em] mt-2"
        >
          ENGLISH MEDIUM SCHOOL
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2 text-white/60 font-body text-sm sm:text-base mt-6"
        >
          <MapPin size={16} className="text-brand-gold" />
          Dharmavaram, Sri Sathya Sai District, AP
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Apply Now 2026–27</Button>
          </a>
          <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp">WhatsApp Us</Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
