import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

const reasons = [
  { title: 'Excellent Curriculum', desc: 'Comprehensive and modern syllabus designed for holistic development.' },
  { title: 'Digital Panel Boards', desc: 'Smart classrooms with interactive digital panel boards.' },
  { title: 'Certified & Experienced Teachers', desc: 'Faculty with proven track records and dedication.' },
  { title: 'Bus Transportation Facility', desc: 'Safe and reliable bus service covering all routes.' },
  { title: 'Fully Air-Conditioned Classrooms', desc: 'Comfortable learning environment all year round.' },
  { title: 'Sports Arena with Qualified Coaches', desc: 'Professional sports training and facilities.' },
  { title: 'Hostel Facility for Boys', desc: 'Safe, monitored residential facility with quality meals.' },
  { title: '24/7 CCTV Surveillance', desc: 'Complete campus security for student safety.' },
];

export default function Vision() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-16" style={{
        backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(45,125,210,0.1) 0%, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-body text-white/50 text-sm mb-4"><Link to="/" className="hover:text-brand-gold">Home</Link> / Vision</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">Our Vision & Community</h1>
          <div className="w-16 h-1 bg-brand-gold mt-4" />
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl overflow-hidden">
            <img
              src="/images/promo-admissions-student.jpeg"
              alt="Why Choose Fazeelah"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Vision" title="Shaping Tomorrow's Leaders" centered={false} />
            <p className="font-body text-brand-muted text-lg leading-relaxed mb-6">{school.vision}</p>
            <blockquote className="font-serif text-2xl text-brand-navy italic border-l-4 border-brand-gold pl-4">
              "We Teach Beyond Books — We Prepare Students For The Real World"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="What Sets Us Apart" title="Why Choose Fazeelah" dark />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {reasons.map((r) => (
              <motion.div key={r.title} variants={fadeUp} className="flex items-start gap-4 p-4">
                <CheckCircle className="text-brand-gold shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-display text-white">{r.title}</h4>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Community" title="Diverse, Inclusive & Collaborative" centered={false} />
            <p className="font-body text-brand-muted text-lg leading-relaxed">{school.community}</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative w-full aspect-square max-w-sm mx-auto"
          >
            <div className="absolute inset-8 border-2 border-brand-gold rounded-full" />
            <div className="absolute inset-16 border-2 border-brand-sky rounded-full" />
            <div className="absolute inset-24 bg-brand-navy rounded-full" />
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
