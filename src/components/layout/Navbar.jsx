import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { school } from '../../data/schoolData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 border-b border-brand-light/80 bg-white/95 shadow-sm backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center" aria-label={school.name}>
          <img
            src="/images/fazeelah-logo-clean.png"
            alt={school.name}
            className="h-11 w-auto object-contain md:h-16"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {school.navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body font-semibold tracking-wide transition-colors ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy hover:text-brand-gold'}`}
            >
              {link.label}
            </Link>
          ))}
          <span className="text-xs font-body font-semibold text-brand-navy border-2 border-brand-gold bg-brand-gold/15 px-3 py-1 rounded-full animate-pulse-gold">
            Admissions Open
          </span>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-brand-navy">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {school.navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-lg ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy'}`}
                >
                  {link.label}
                </Link>
              ))}
              <span className="text-xs font-body font-semibold text-brand-navy border-2 border-brand-gold bg-brand-gold/15 px-3 py-1 rounded-full mt-2">
                Admissions Open
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
