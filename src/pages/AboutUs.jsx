import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

export default function AboutUs() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      {/* Hero Banner */}
      <section className="bg-brand-navy pt-32 pb-16 relative" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(45,125,210,0.1) 0%, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-body text-white/50 text-sm mb-4"><Link to="/" className="hover:text-brand-gold">Home</Link> / About Us</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">Discover Fazeelah School</h1>
          <div className="w-16 h-1 bg-brand-gold mt-4" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Philosophy" title="What We Believe" centered={false} />
            <p className="font-body text-brand-muted text-lg leading-relaxed relative">
              <span className="absolute -left-4 -top-4 text-6xl text-brand-gold/20 font-serif">"</span>
              {school.philosophy}
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl overflow-hidden">
            <img
              src="/images/school-front.jpeg"
              alt="School building front"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1 flex flex-col items-center gap-4">
            <div className="rounded-2xl overflow-hidden w-full aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" alt="School" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden w-64 shadow-brand">
              <img src="/images/notice-hiring.jpeg" alt="We Are Hiring" className="w-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
            <SectionHeading eyebrow="Our Faculty" title="Dedicated Educators" centered={false} />
            <p className="font-body text-brand-muted text-lg leading-relaxed mb-6">{school.faculty}</p>
            <ul className="space-y-2 font-body text-brand-navy">
              {['Experienced Educators', 'Passionate About Teaching', 'Student-First Approach'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-brand-gold">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Our Core" title="Our Values" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Integrity', desc: 'Upholding honesty and strong moral principles in everything we do.' },
              { title: 'Excellence', desc: 'Striving for the highest standards in academics and character.' },
              { title: 'Community', desc: 'Building a supportive environment where everyone belongs.' },
            ].map((v, i) => (
              <motion.div key={v.title} variants={fadeUp} className="relative bg-brand-cream rounded-2xl p-8 border-l-4 border-brand-gold overflow-hidden">
                <span className="absolute top-4 right-6 font-display text-5xl text-brand-gold/20 select-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl text-brand-navy mb-2">{v.title}</h3>
                <p className="font-body text-brand-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-12 text-center">
        <h2 className="font-display text-3xl text-brand-navy">{school.subTagline}</h2>
        <div className="mt-6">
          <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Apply Now</Button>
          </a>
        </div>
      </section>
    </motion.main>
  );
}
