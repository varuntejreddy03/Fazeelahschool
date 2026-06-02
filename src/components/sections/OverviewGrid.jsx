import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';
import { school } from '../../data/schoolData';
import { staggerContainer } from '../../hooks/useScrollReveal';

const cards = [
  { title: "About Us", body: "We are dedicated to providing a safe and nurturing environment where students can learn and grow.", cta: "Learn More", link: "/about" },
  { title: "Our Programs", body: "Comprehensive programs from early childhood education to high school, preparing students for success.", cta: "Explore", link: "/vision" },
  { title: "Faculty & Staff", body: "Highly qualified and dedicated teachers committed to helping every student achieve their full potential.", cta: "Meet Our Team", link: "/about" },
  { title: "Admissions 2026–27", body: "We welcome students of all backgrounds. Apply now for the upcoming session — limited seats available.", cta: "Apply Now", link: `https://wa.me/${school.whatsapp}`, isExternal: true },
  { title: "Campus Life", body: "From Digital Classrooms to sports arenas and music — there is something for everyone to enjoy.", cta: "See Campus", link: "/vision" },
  { title: "Get In Touch", body: "Visit us at Bathalpalli Road, Nagalur Village, Dharmavaram. Open Mon–Sat, 9 AM to 5 PM.", cta: "Contact Us", link: "/contact" },
];

export default function OverviewGrid() {
  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading eyebrow="Explore Our School" title="A Place to Learn and Grow" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => (
            <FeatureCard key={card.title} index={i + 1} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
