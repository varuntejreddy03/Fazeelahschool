import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { school } from '../../data/schoolData';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy pt-16 md:pt-20">
      <div className="grid min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.45fr_0.55fr]">
        <div className="relative z-10 flex items-center bg-brand-navy px-4 py-10 md:px-8 lg:justify-end lg:py-14">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, #C9A84C 0, #C9A84C 1px, transparent 1px, transparent 34px)',
            }}
          />
          <div className="relative w-full max-w-2xl lg:max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-white/5 px-4 py-2 text-[11px] font-body font-semibold uppercase tracking-[0.16em] text-brand-gold"
          >
            <ShieldCheck size={15} />
            Admissions open {school.admissions.year} - {school.admissions.range}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl leading-[1.04] text-brand-gold sm:text-5xl"
          >
            {school.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 font-serif text-xl italic text-brand-gold md:text-2xl"
          >
            {school.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/80"
          >
            {school.hero.subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-5 flex flex-col gap-3 font-body text-sm text-white/75 sm:flex-row sm:items-center sm:gap-5"
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-gold" />
              Dharmavaram, Sri Sathya Sai District, AP
            </span>
            <a href="tel:+917075355455" className="flex items-center gap-2 hover:text-brand-gold">
              <Phone size={16} className="text-brand-gold" />
              {school.phones[0]}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-7 flex flex-col gap-4 sm:flex-row"
          >
            <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="px-6">
                Apply Now
                <ArrowUpRight size={17} />
              </Button>
            </a>
            <a href="/#/contact">
              <Button variant="outline" className="px-6">Visit Campus</Button>
            </a>
          </motion.div>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#dfe8ff] lg:min-h-full">
          <img
            src="/images/school-angle-front-wide.png"
            alt="Fazeelah School campus building"
            className="h-full max-h-[calc(100vh-5rem)] w-full object-contain object-center"
            width="1402"
            height="1124"
          />
          <div className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-brand-navy to-transparent lg:block" />
        </div>
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
