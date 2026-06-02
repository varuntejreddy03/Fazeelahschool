import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

const pillars = [
  { title: 'Critical Thinkers', desc: 'Developing analytical minds that question and innovate.' },
  { title: 'Lifelong Learners', desc: 'Instilling curiosity and love for continuous learning.' },
  { title: 'Responsible Citizens', desc: 'Building character and social responsibility.' },
];

const steps = [
  { num: '01', title: 'Not Just Books', body: 'We focus on thinking, creativity, and real understanding.' },
  { num: '02', title: 'Real Learning', body: 'Creativity and real-world skills for the future.' },
  { num: '03', title: 'Beyond Academics', body: 'Character, community, and values-based education.' },
];

export default function Mission() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-16" style={{
        backgroundImage: 'radial-gradient(circle at 50% 80%, rgba(201,168,76,0.05) 0%, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-body text-white/50 text-sm mb-4"><Link to="/" className="hover:text-brand-gold">Home</Link> / Mission</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">Where Learning Comes First</h1>
          <div className="w-16 h-1 bg-brand-gold mt-4" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-brand">
            <img
              src="/images/school-front.jpeg"
              alt="Student working"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Our Mission" title="Empowering Young Minds" centered={false} />
            <p className="font-body text-brand-muted text-lg leading-relaxed">{school.mission}</p>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {pillars.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} className="relative bg-brand-cream rounded-2xl p-8 border-l-4 border-brand-gold overflow-hidden">
              <span className="absolute top-4 right-6 font-display text-5xl text-brand-gold/20 select-none">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-xl text-brand-navy mb-2">{p.title}</h3>
              <p className="font-body text-brand-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Our Approach" title="How We Teach" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="text-center">
                <span className="inline-block font-display text-brand-gold text-2xl mb-2">{s.num}</span>
                <div className="w-8 h-px bg-brand-gold/40 mx-auto my-2" />
                <h4 className="font-display text-lg text-brand-navy mb-2">{s.title}</h4>
                <p className="font-body text-brand-muted leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-navy text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white">Ready to Join the Fazeelah Family?</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Apply for Admissions</Button>
          </a>
          <Link to="/contact"><Button variant="outline">Contact Us</Button></Link>
        </div>
      </section>
    </motion.main>
  );
}
