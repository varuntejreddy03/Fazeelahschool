import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
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

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-brand-navy shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="text-brand-gold" size={28} />
          <div>
            <span className="font-display text-white text-lg font-bold">FAZEELAH</span>
            <span className="block text-brand-gold text-xs">English Medium School</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {school.navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body font-medium tracking-wide transition-colors ${location.pathname === link.path ? 'text-brand-gold' : 'text-white/80 hover:text-brand-gold'}`}
            >
              {link.label}
            </Link>
          ))}
          <span className="text-xs font-body font-semibold text-brand-gold border-2 border-brand-gold px-3 py-1 rounded-full animate-pulse-gold">
            Admissions Open
          </span>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-brand-navy overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {school.navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-display text-lg ${location.pathname === link.path ? 'text-brand-gold' : 'text-white/80'}`}
                >
                  {link.label}
                </Link>
              ))}
              <span className="text-xs font-body font-semibold text-brand-gold border-2 border-brand-gold px-3 py-1 rounded-full mt-2">
                Admissions Open
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
