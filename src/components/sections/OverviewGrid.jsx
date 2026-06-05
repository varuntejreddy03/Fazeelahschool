import { motion } from 'framer-motion';
import { BookOpen, ClipboardList, GraduationCap, Landmark, Phone, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';
import { school } from '../../data/schoolData';
import { staggerContainer } from '../../hooks/useScrollReveal';

const cards = [
  {
    title: "About Us",
    body: "A safe, nurturing environment where students learn with discipline, care, and confidence.",
    cta: "Learn More",
    link: "/about",
    Icon: GraduationCap,
  },
  {
    title: "Our Programs",
    body: "Strong academics with value-based learning that prepares students for school and life.",
    cta: "Explore",
    link: "/vision",
    Icon: BookOpen,
  },
  {
    title: "Faculty & Staff",
    body: "Experienced teachers focused on helping every student reach their full potential.",
    cta: "Meet Our Team",
    link: "/about",
    Icon: Users,
  },
  {
    title: "Admissions 2026-27",
    body: "Applications are open for the upcoming session with limited seats available.",
    cta: "Apply Now",
    link: `https://wa.me/${school.whatsapp}`,
    isExternal: true,
    Icon: ClipboardList,
  },
  {
    title: "Campus Life",
    body: "Digital classrooms, sports, transport, hostel support, and a secure campus environment.",
    cta: "See Campus",
    link: "/vision",
    Icon: Landmark,
  },
  {
    title: "Get In Touch",
    body: "Visit us at Bathalpalli Road, Nagalur Village, Dharmavaram. Open Monday to Saturday.",
    cta: "Contact Us",
    link: "/contact",
    Icon: Phone,
  },
];

export default function OverviewGrid() {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            eyebrow="Explore Our School"
            title="A Place to Learn and Grow"
            subtitle={school.philosophy}
            centered={false}
          />
          <div className="mb-12 border-l-4 border-brand-gold bg-white p-6 shadow-brand">
            <p className="font-serif text-2xl italic leading-snug text-brand-blue">
              "We teach beyond books, with values that help children grow into thoughtful, responsible learners."
            </p>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, i) => (
            <FeatureCard key={card.title} index={i + 1} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
