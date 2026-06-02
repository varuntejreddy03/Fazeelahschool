import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import ContactUs from './pages/ContactUs';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <WhatsAppButton />
    </HashRouter>
  );
}
