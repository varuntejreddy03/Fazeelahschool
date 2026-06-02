import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

export default function ContactUs() {
  const today = new Date().getDay(); // 0=Sun

  const hours = [
    { day: 'Monday', time: school.hours.weekdays },
    { day: 'Tuesday', time: school.hours.weekdays },
    { day: 'Wednesday', time: school.hours.weekdays },
    { day: 'Thursday', time: school.hours.weekdays },
    { day: 'Friday', time: school.hours.weekdays },
    { day: 'Saturday', time: school.hours.saturday },
    { day: 'Sunday', time: school.hours.sunday },
  ];

  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-body text-white/50 text-sm mb-4"><Link to="/" className="hover:text-brand-gold">Home</Link> / Contact Us</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">Get In Touch</h1>
          <p className="font-body text-white/60 mt-2">We serve with empathy</p>
          <div className="w-16 h-1 bg-brand-gold mt-4" />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeUp} className="relative bg-brand-cream rounded-2xl p-8 border-l-4 border-brand-gold overflow-hidden">
              <span className="absolute top-4 right-6 font-display text-5xl text-brand-gold/20 select-none">01</span>
              <h3 className="font-display text-xl text-brand-navy mb-3">Visit Us</h3>
              <p className="font-body text-brand-muted text-sm leading-relaxed">{school.address}</p>
              <p className="font-body text-brand-muted text-sm mt-2">Open Mon–Sat: 9 AM – 5 PM</p>
            </motion.div>

            <motion.div variants={fadeUp} className="relative bg-brand-cream rounded-2xl p-8 border-l-4 border-brand-gold overflow-hidden">
              <span className="absolute top-4 right-6 font-display text-5xl text-brand-gold/20 select-none">02</span>
              <h3 className="font-display text-xl text-brand-navy mb-3">Call Us</h3>
              <a href="tel:+917075355455" className="block font-body text-brand-muted hover:text-brand-sky">{school.phone[0]}</a>
              <a href="tel:+917207744544" className="block font-body text-brand-muted hover:text-brand-sky">{school.phone[1]}</a>
              <p className="font-body text-brand-muted text-sm mt-2">WhatsApp available</p>
            </motion.div>

            <motion.div variants={fadeUp} className="relative bg-brand-cream rounded-2xl p-8 border-l-4 border-brand-gold overflow-hidden">
              <span className="absolute top-4 right-6 font-display text-5xl text-brand-gold/20 select-none">03</span>
              <h3 className="font-display text-xl text-brand-navy mb-3">Email Us</h3>
              {Object.values(school.email).map((e) => (
                <a key={e} href={`mailto:${e}`} className="block font-body text-brand-muted text-sm hover:text-brand-sky">{e}</a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-lg mx-auto px-4">
          <SectionHeading eyebrow="Office Hours" title="When We're Available" />
          <div className="bg-white rounded-2xl overflow-hidden shadow-brand">
            {hours.map((h, i) => (
              <div key={h.day} className={`flex justify-between px-6 py-3 border-b border-brand-cream font-body text-sm ${(i + 1) % 7 === today ? 'bg-brand-gold/20 font-semibold' : ''}`}>
                <span className="text-brand-navy">{h.day}</span>
                <span className="text-brand-muted">{h.time}</span>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-brand-muted text-sm mt-4">{school.hours.note}</p>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl text-white">Admissions Open {school.admissions.year}</h2>
            <p className="font-body text-white/60 mt-2">Empowering Young Minds</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp">WhatsApp Us</Button>
              </a>
              <a href="tel:+917075355455"><Button variant="outline">Call Now</Button></a>
            </div>
            <div className="mt-6 space-y-1">
              {Object.values(school.email).map((e) => (
                <p key={e} className="font-body text-white/50 text-sm">{e}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden mx-auto max-w-sm">
            <img src="/images/promo-building-tall.jpeg" alt="A Place to Learn and Grow" className="w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Location" title="Reach Us" />
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.0!2d77.85!3d14.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBathalpalli+Road%2C+Nagalur+Village%2C+Dharmavaram!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            />
          </div>
        </div>
      </section>
    </motion.main>
  );
}
