import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { school } from '../../data/schoolData';
import { fadeIn } from '../../hooks/useScrollReveal';

const Facebook = ({ size = 18, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
            <img
              src="/images/fazeelah-logo-clean.png"
              alt={school.name}
              className="h-12 w-auto object-contain bg-white rounded p-1 mb-4"
            />
            <p className="font-body text-white/70 text-sm leading-relaxed">{school.subTagline}</p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href={`https://wa.me/${school.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-body text-sm font-semibold transition-colors"
                title="WhatsApp Us"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <span className="text-white/20">|</span>
              <a
                href={school.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-gold transition-colors"
                title="Visit our Facebook Page"
              >
                <Facebook size={18} />
              </a>
              <a
                href={school.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-gold transition-colors"
                title="Visit our Instagram Profile"
              >
                <Instagram size={18} />
              </a>
            </div>
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
              {school.phones.map((phoneNum) => (
                <p key={phoneNum} className="flex items-center gap-2">
                  <Phone size={14} />
                  <a href={`tel:${phoneNum.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors">
                    {phoneNum}
                  </a>
                </p>
              ))}
              <p className="flex items-center gap-2"><Mail size={14} />{school.email.general}</p>
              <p className="mt-3">Mon-Sat: {school.hours.weekdays}</p>
              <p>Sunday: {school.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-white/10 text-center">
          <p className="font-body text-white/50 text-sm">(c) 2026 {school.name}. All Rights Reserved.</p>
          <p className="font-serif italic text-white/30 text-xs mt-1">Built for excellence in education</p>
        </div>
      </motion.footer>
    </>
  );
}
