import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { school } from '../../data/schoolData';
import { fadeIn } from '../../hooks/useScrollReveal';

export default function Footer() {
  return (
    <>
      <div className="w-full h-1 bg-brand-gold" />
      <motion.footer
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-brand-navy text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl mb-4">{school.shortName}</h3>
            <p className="font-body text-white/70 text-sm leading-relaxed">{school.subTagline}</p>
            <a
              href={`https://wa.me/${school.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-green-400 hover:text-green-300 font-body text-sm"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.25em] mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-3">
              {school.navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-display text-white/60 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.25em] mb-4 text-brand-gold">Contact & Hours</h4>
            <div className="space-y-2 text-sm text-white/70 font-body leading-relaxed">
              <p className="flex items-start gap-2"><MapPin size={14} className="mt-1 shrink-0" />{school.address}</p>
              <p className="flex items-center gap-2"><Phone size={14} />{school.phone[0]}</p>
              <p className="flex items-center gap-2"><Mail size={14} />{school.email.general}</p>
              <p className="mt-3">Mon–Sat: {school.hours.weekdays}</p>
              <p>Sunday: {school.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-white/10 text-center">
          <p className="font-body text-white/50 text-sm">© 2026 {school.name}. All Rights Reserved.</p>
          <p className="font-serif italic text-white/30 text-xs mt-1">Built with ♥ for excellence in education</p>
        </div>
      </motion.footer>
    </>
  );
}
