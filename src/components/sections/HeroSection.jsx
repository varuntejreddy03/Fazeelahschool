import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { school } from '../../data/schoolData';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #C9A84C 0, #C9A84C 1px, transparent 1px, transparent 32px)',
        }}
      />
      <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <img
          src="/images/hero-building.jpeg"
          alt="Fazeelah English Medium School campus building"
          className="h-full w-full object-cover"
          width="1200"
          height="900"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/35 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-28 md:px-8 md:py-36">
        <div className="max-w-3xl pb-28 md:pb-20 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-white/5 px-4 py-2 text-xs font-body font-semibold uppercase tracking-[0.22em] text-brand-gold"
          >
            <ShieldCheck size={15} />
            Admissions open {school.admissions.year}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-serif text-2xl italic text-brand-gold md:text-3xl"
          >
            {school.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl leading-[0.9] text-brand-gold sm:text-7xl md:text-9xl"
          >
            FAZEELAH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 font-display text-base tracking-[0.16em] text-white/75 sm:text-xl sm:tracking-[0.3em] md:text-2xl"
          >
            ENGLISH MEDIUM SCHOOL
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/70 md:text-lg"
          >
            {school.subTagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 flex flex-col gap-3 font-body text-sm text-white/75 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-gold" />
              Dharmavaram, Sri Sathya Sai District, AP
            </span>
            <a href="tel:+917075355455" className="flex items-center gap-2 hover:text-brand-gold">
              <Phone size={16} className="text-brand-gold" />
              {school.phone[0]}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Apply Now
                <ArrowUpRight size={17} />
              </Button>
            </a>
            <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">WhatsApp Us</Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-24 left-4 right-4 grid grid-cols-2 gap-3 md:left-8 md:right-auto md:w-[520px] lg:left-auto lg:right-8"
        >
          <div className="border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <p className="font-display text-3xl text-brand-gold">2</p>
            <p className="text-xs uppercase tracking-widest text-white/65">Acre campus</p>
          </div>
          <div className="border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <p className="font-display text-3xl text-brand-gold">500+</p>
            <p className="text-xs uppercase tracking-widest text-white/65">Students enrolled</p>
          </div>
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
