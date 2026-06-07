import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { school } from '../data/schoolData';
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal';

const contactCards = [
  {
    title: 'Visit Us',
    Icon: MapPin,
    lines: [school.address],
  },
  {
    title: 'Call Us',
    Icon: Phone,
    lines: school.phones,
  },
  {
    title: 'Email Us',
    Icon: Mail,
    lines: Object.values(school.emails),
  },
];

export default function ContactUs() {
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
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20">
        <img src="/images/school-angle-front-wide.png" alt="Fazeelah English Medium School front" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-4 font-body text-sm text-white/55"><Link to="/" className="hover:text-brand-gold">Home</Link> / Contact Us</p>
          <h1 className="max-w-3xl font-display text-5xl text-white md:text-6xl">Contact Fazeelah School</h1>
          <div className="mt-5 h-1 w-16 bg-brand-gold" />
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/70">
            Speak with our admissions team for campus visits, hostel details, transportation, and applications for {school.admissions.range}.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Get In Touch" title="Admissions and Campus Enquiries" subtitle="Use phone, WhatsApp, email, or visit the campus during school hours." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactCards.map(({ title, Icon, lines }) => (
              <motion.div key={title} variants={fadeUp} className="border border-brand-light bg-brand-cream p-7 shadow-brand">
                <Icon className="mb-5 text-brand-gold" size={30} strokeWidth={1.8} />
                <h3 className="font-display text-2xl text-brand-navy">{title}</h3>
                <div className="mt-4 space-y-2">
                  {lines.map((line) => {
                    const href = title === 'Call Us' ? `tel:${line.replace(/\\s/g, '')}` : title === 'Email Us' ? `mailto:${line}` : null;
                    return href ? (
                      <a key={line} href={href} className="block break-words font-body text-sm leading-relaxed text-brand-muted hover:text-brand-sky">{line}</a>
                    ) : (
                      <p key={line} className="font-body text-sm leading-relaxed text-brand-muted">{line}</p>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeading eyebrow="Office Hours" title="Plan Your Visit" centered={false} />
            <div className="overflow-hidden border border-brand-light bg-white shadow-brand">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 border-b border-brand-cream px-6 py-3 font-body text-sm last:border-b-0">
                  <span className="font-semibold text-brand-navy">{h.day}</span>
                  <span className="text-brand-muted">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button variant="primary"><MessageCircle size={18} /> WhatsApp Admissions</Button>
              </a>
              <a href="tel:+917075355455">
                <Button variant="outline" className="border-brand-navy text-brand-navy hover:border-brand-gold">Call Now</Button>
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
            <img src="/images/school-angle-aerial.png" alt="Aerial angle of Fazeelah school" className="h-72 w-full rounded-2xl object-cover shadow-brand" loading="lazy" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-brand-light bg-white p-5 shadow-brand">
                <Clock className="mb-3 text-brand-gold" size={24} />
                <p className="font-body text-sm font-semibold text-brand-navy">{school.hoursText}</p>
              </div>
              <div className="border border-brand-light bg-white p-5 shadow-brand">
                <MessageCircle className="mb-3 text-brand-gold" size={24} />
                <p className="font-body text-sm font-semibold text-brand-navy">WhatsApp: {school.whatsappFormatted}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-brand-gold">Admissions</p>
            <h2 className="font-display text-4xl text-white md:text-5xl">Admissions Open {school.admissions.year} - {school.admissions.range}</h2>
            <p className="mt-5 max-w-xl font-body leading-relaxed text-white/65">
              Schedule a campus visit, ask about hostel availability, or start the admission process on WhatsApp.
            </p>
          </div>
          <img src="/images/students-campus-run.jpeg" alt="Students at Fazeelah campus" className="h-80 w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </section>
    </motion.main>
  );
}
